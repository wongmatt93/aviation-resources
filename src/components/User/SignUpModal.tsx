import "./SignUpModal.css";
import Modal from "react-modal";
import { FormEvent, useState } from "react";

Modal.setAppElement("#root");

const SignUpModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className="SignUpModal">
      <button onClick={openModal}>Sign Up</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div>
          <h2>Sign Up</h2>
          <button onClick={closeModal}>close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
          <button>Sign up</button>
        </form>
      </Modal>
    </div>
  );
};

export default SignUpModal;
