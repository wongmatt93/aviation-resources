import "./LoginModal.css";
import Modal from "react-modal";
import { useState } from "react";
import LoginForm from "./LoginForm";

Modal.setAppElement("#root");

const LoginModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  return (
    <div className="LoginModal">
      <button className="login-option" onClick={openModal}>
        Log In
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="login-modal animate__animated animate__fadeInUpBig animate__faster"
        overlayClassName="login-modal-overlay"
      >
        <LoginForm closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default LoginModal;
