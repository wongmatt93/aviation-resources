import "./SignUpModal.css";
import Modal from "react-modal";
import { useState } from "react";
import ConfirmCode from "./ConfirmCode";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { AiOutlineUserAdd } from "react-icons/ai";

Modal.setAppElement("#root");

const SignUpModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState("signup");

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => {
    setIsOpen(false);
    setCurrentForm("signup");
  };
  const afterSignup = (): void => setCurrentForm("confirm");
  const afterConfirm = (): void => setCurrentForm("login");

  return (
    <div className="SignUpModal">
      <button className="signup-options" onClick={openModal}>
        <div>
          <AiOutlineUserAdd />
        </div>
        Sign Up
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="signup-modal animate__animated animate__fadeInUpBig animate__faster"
        overlayClassName="signup-modal-overlay "
      >
        <div
          className="form-block"
          style={{ display: currentForm === "signup" ? "block" : "none" }}
        >
          <SignupForm closeModal={closeModal} afterSignup={afterSignup} />
        </div>
        <div
          className="form-block"
          style={{ display: currentForm === "confirm" ? "block" : "none" }}
        >
          <ConfirmCode closeModal={closeModal} afterConfirm={afterConfirm} />
        </div>
        <div
          className="form-block"
          style={{ display: currentForm === "login" ? "block" : "none" }}
        >
          <LoginForm closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default SignUpModal;
