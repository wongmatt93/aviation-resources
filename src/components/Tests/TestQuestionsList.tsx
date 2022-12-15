import "./TestQuestionsList.css";
import { useState } from "react";
import Modal from "react-modal";
import TestQuestionCard from "./TestQuestionCard";
import { Test } from "../../Models/Test";
import AppUser from "../../Models/AppUser";
import "animate.css";
import { AiOutlineClose } from "react-icons/ai";

Modal.setAppElement("#root");

interface Props {
  test: Test;
  user: AppUser | null;
  closeModal: (e: React.MouseEvent<HTMLElement>) => void;
  modalIsOpen: boolean;
}

const TestQuestionsList = ({
  test,
  user,
  closeModal,
  modalIsOpen,
}: Props) => {
  return (
    <div className="TestQuestionsList">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="test-modal animate__animated animate__fadeInUpBig animate__faster"
        overlayClassName="test-modal-overlay"
      >
        <button className="x" onClick={closeModal}>
          <AiOutlineClose />
        </button>

        <ul>
          {test.test_questions
            .slice()
            .sort((a, b) => a.id.localeCompare(b.id))
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
