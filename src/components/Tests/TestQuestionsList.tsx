import "./TestQuestionsList.css";
import { useState } from "react";
import Modal from "react-modal";
import Test from "../../Models/TestsModels/Test";
import TestQuestionCard from "./TestQuestionCard";

Modal.setAppElement("#root");

interface Props {
  test: Test;
}

const TestQuestionsList = ({ test }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  return (
    <div className="TestQuestionsList">
      <button onClick={openModal}>Open Test</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <h3>Test</h3>
        <ul>
          {test.test_questions.map((question) => (
            <TestQuestionCard key={question.id} question={question} />
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default TestQuestionsList;
