import "./NewTestForm.css";
import Modal from "react-modal";
import { FormEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ACS, GET_QUESTIONS, GET_TESTS } from "../../GraphQL/Queries";
import ACSOutline from "../../Models/AirmanCertificationStandard.ts";
import AppUser from "../../Models/AppUser";
import { INSERT_TEST } from "../../GraphQL/Mutations";
import { Question } from "../../Models/Test";

Modal.setAppElement("#root");

interface Props {
  user: AppUser | null;
}

const NewTestForm = ({ user }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // controlled component for number of questions you want on your test
  const [numQuestions, setNumQuestions] = useState(50);
  const [acs, setAcs] = useState("");
  const [acsOutline, setAcsOutline] = useState<ACSOutline | undefined>(
    undefined
  );

  // array of ACS options
  const [acsArray, setAcsArray] = useState<ACSOutline[]>([]);

  // all questions available from database
  const [questions, setQuestions] = useState<Question[]>([]);

  // all questions that fit the filter
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  const resACS = useQuery(GET_ACS);
  const resQuestions = useQuery(GET_QUESTIONS);

  // mutation to add test with questions
  const [addTest, { loading, error }] = useMutation(INSERT_TEST, {
    refetchQueries: [{ query: GET_TESTS, variables: { id: user && user.id } }],
  });

  const openModal = (): void => {
    setIsOpen(true);
    setAcs(acsArray[0].abbreviation);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  // randomize list of questions so each test is different
  const shuffleQuestions = (questions: Question[]): Question[] => {
    let currentIndex = questions.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [questions[currentIndex], questions[randomIndex]] = [
        questions[randomIndex],
        questions[currentIndex],
      ];
    }
    return questions;
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const selected: { question_id: string }[] = [];
    shuffleQuestions(filteredQuestions.slice())
      .slice(0, numQuestions)
      .forEach((item) => selected.push({ question_id: item.id }));
    addTest({
      variables: {
        id: user && user.id,
        acs_id: acsOutline!.id,
        data: selected,
      },
    });
    closeModal();
  };

  useEffect(() => {
    // sets questions array to all questions from graphQL
    if (resQuestions.data) {
      setQuestions(resQuestions.data.question);
      // sets acsArray to all 5 acs options
      // sets default acs to the first one
      if (resACS.data) {
        const array: ACSOutline[] = resACS.data.airman_certification_standards;
        setAcsArray(resACS.data.airman_certification_standards);
        setAcs(array[0].abbreviation);
      }
    }
  }, [resQuestions.data, resACS.data]);

  useEffect(() => {
    if (acs) {
      const outline: ACSOutline | undefined = acsArray.find(
        (outline) => outline.abbreviation === acs
      );
      setAcsOutline(outline);
      if (outline) {
        // filters questions array to match filtered acs
        const filtered: Question[] = questions.filter(
          (question) => question.airman_certification_standard_id === outline.id
        );
        setFilteredQuestions(filtered);
        // ensures you can't add more questions than are available
        if (numQuestions > filtered.length) {
          setNumQuestions(filtered.length);
        }
      }
    }
  }, [acs, acsArray, numQuestions, questions]);

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>`Submission error! ${error.message}`</p>;

  return (
    <div className="NewTestForm">
      {resQuestions.data && <button onClick={openModal}>+</button>}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>New Test</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="selected-acs">Selected ACS</label>
          <select
            name="selected-acs"
            id="selected-acs"
            onChange={(e) => setAcs(e.target.value)}
          >
            {acsArray.map((item) => (
              <option key={item.id} value={item.abbreviation}>
                {item.abbreviation}
              </option>
            ))}
          </select>
          <p>Available Questions: {filteredQuestions.length}</p>
          <label htmlFor="num-quesitons">
            Selected Questions: {numQuestions}{" "}
          </label>
          <input
            type="range"
            name="num-questions"
            id="num-questions"
            min="1"
            max={filteredQuestions.length}
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
          />
          <button>Create Test</button>
        </form>
      </Modal>
    </div>
  );
};

export default NewTestForm;
