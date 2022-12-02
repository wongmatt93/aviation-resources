import "./TestQuestionsList.css";
import { useState } from "react";
import Modal from "react-modal";
import TestQuestionCard from "./TestQuestionCard";
import { Test } from "../../Models/Test";

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
          {test.test_questions
            .slice()
            .sort((a, b) =>
              (
                a.question.reference + a.question.airman_categories
              ).localeCompare(
                b.question.reference + b.question.airman_categories
              )
            )
            .map((question) => (
              <TestQuestionCard key={question.id} question={question} />
            ))}
        </ul>
      </Modal>
    </div>
  );
};

export default TestQuestionsList;
