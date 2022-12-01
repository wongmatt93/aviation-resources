import "./NewTestForm.css";
import Modal from "react-modal";
import { FormEvent, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ACS, GET_QUESTIONS } from "../../GraphQL/Queries";
import ACSOutline from "../../Models/ACSModels/ACSOutline";
import AppUser from "../../Models/AppUser";
import TestQuestions from "./TestQuestionsList";
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

  // const { error, loading, data } = useQuery(GET_ACS);
  const resACS = useQuery(GET_ACS);
  const resQuestions = useQuery(GET_QUESTIONS);

  const openModal = (): void => {
    setIsOpen(true);
    setAcs(acsArray[0].abbreviation);
  };
  const closeModal = (): void => setIsOpen(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addTest({ variables: { id: user && user.id, acs_id: acsOutline!.id } });
    closeModal();
  };

  useEffect(() => {
    resACS.data && setAcsArray(resACS.data.airman_certification_standards);
  }, [resACS.data]);

  useEffect(() => {
    resQuestions.data && setQuestions(resQuestions.data.question);
  }, [resQuestions.data]);

  useEffect(() => {
    acs && setAcsOutline(acsArray.find((item) => item.abbreviation === acs));
  }, [acs]);

  return (
    <div className="NewTestForm">
      <button onClick={openModal}>+</button>
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
          <p>
            Available Questions:{" "}
            {acsOutline &&
              questions.filter(
                (question) =>
                  question.airman_certification_standard_id === acsOutline.id
              ).length}
          </p>
          <label htmlFor="num-quesitons">
            Selected Questions: {numQuestions}{" "}
          </label>
          <input
            type="range"
            name="num-questions"
            id="num-questions"
            min="1"
            max={
              acsOutline &&
              questions.filter(
                (question) =>
                  question.airman_certification_standard_id === acsOutline.id
              ).length
            }
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
