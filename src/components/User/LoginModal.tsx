import "./LoginModal.css";
import Modal from "react-modal";
import { FormEvent, useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";

Modal.setAppElement("#root");

const LoginModal = () => {
  const { signIn } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    signIn();
  };

  return (
    <div className="LoginModal">
      <button className="login-option" onClick={openModal}>
        Log In
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div>
          <h2>Log In</h2>
          <button onClick={closeModal}>close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button>Log in</button>
        </form>
      </Modal>
    </div>
  );
};

export default LoginModal;
