import "./ForgotPasswordModal.css";
import Modal from "react-modal";
import { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ConfirmForgotPasswordCode from "./ConfirmForgotPasswordCode";
import LoginForm from "./LoginForm";

Modal.setAppElement("#root");

const ForgotPasswordModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState("forgot");

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => {
    setIsOpen(false);
    setCurrentForm("forgot");
  };
  const afterForgot = (): void => setCurrentForm("confirm");
  const afterConfirm = (): void => setCurrentForm("login");

  return (
    <div className="ForgotPasswordModal">
      <button className="forgot-password" onClick={openModal}>
        Forgot Password
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="login-modal animate__animated animate__fadeInUpBig animate__faster"
        overlayClassName="login-modal-overlay"
      >
        <div
          className="form-block"
          style={{ display: currentForm === "forgot" ? "block" : "none" }}
        >
          <ForgotPasswordForm
            closeModal={closeModal}
            afterForgot={afterForgot}
          />
        </div>
        <div
          className="form-block"
          style={{ display: currentForm === "confirm" ? "block" : "none" }}
        >
          <ConfirmForgotPasswordCode
            closeModal={closeModal}
            afterConfirm={afterConfirm}
          />
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

export default ForgotPasswordModal;
