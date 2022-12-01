import "./NewTestForm.css";
import Modal from "react-modal";
import { FormEvent, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ACS, GET_QUESTIONS } from "../../GraphQL/Queries";
import ACSOutline from "../../Models/ACSModels/ACSOutline";
import AppUser from "../../Models/AppUser";
import Question from "../../Models/TestsModels/Question";

Modal.setAppElement("#root");

interface Props {
  user: AppUser | null;
  addTest: ({}) => {};
}

const NewTestForm = ({ user, addTest }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [numQuestions, setNumQuestions] = useState(50);
  const [acs, setAcs] = useState("");
  const [acsOutline, setAcsOutline] = useState<ACSOutline | undefined>(
    undefined
  );
  const [acsArray, setAcsArray] = useState<ACSOutline[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  const resACS = useQuery(GET_ACS);
  const resQuestions = useQuery(GET_QUESTIONS);

  const openModal = (): void => {
    setIsOpen(true);
    setAcs(acsArray[0].abbreviation);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const shuffleQuestions = (questions: Question[]): Question[] => {
    let currentIndex = questions.length,
      randomIndex;
    while (currentIndex != 0) {
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
    if (resQuestions.data) {
      setQuestions(resQuestions.data.question);
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
        const filtered: Question[] = questions.filter(
          (question) => question.airman_certification_standard_id === outline.id
        );
        setFilteredQuestions(filtered);
        if (numQuestions > filtered.length) {
          setNumQuestions(filtered.length);
        }
      }
    }
  }, [acs]);

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
