import "./TestQuestionsList.css";
import { useState } from "react";
import Modal from "react-modal";
import TestQuestionCard from "./TestQuestionCard";
import { Test } from "../../Models/Test";
import AppUser from "../../Models/AppUser";
import "animate.css";

Modal.setAppElement("#root");

interface Props {
  test: Test;
  user: AppUser | null;
}

const TestQuestionsList = ({ test, user }: Props) => {
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
        className="test-modal animate__animated animate__fadeInUpBig animate__faster"
        overlayClassName="test-modal-overlay"
      >
        <button className="x" onClick={closeModal}>
          x
        </button>

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
              <TestQuestionCard
                key={question.id}
                question={question}
                user={user}
              />
            ))}
        </ul>
      </Modal>
    </div>
  );
};

export default TestQuestionsList;
