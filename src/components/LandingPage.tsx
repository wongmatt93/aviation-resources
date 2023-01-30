import "./LandingPage.css";
import { useNavigate, Link } from "react-router-dom";
import LoginModal from "./User/LoginModal";
import SignUpModal from "./User/SignUpModal";
import ForgotPasswordModal from "./User/ForgotPasswordModal";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import ConfirmCode from "./User/ConfirmCode";
import Modal from "react-modal";
import LoginForm from "./User/LoginForm";
import { AiOutlineQuestionCircle } from "react-icons/ai";

Modal.setAppElement("#root");

const LandingPage = () => {
  const { signedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState("confirm");

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => {
    setIsOpen(false);
    setCurrentForm("confirm");
  };
  const afterConfirm = (): void => setCurrentForm("login");

  useEffect(() => {
    signedIn && navigate("/resources");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn]);

  return (
    <main className="LandingPage">
      <h2>Please Select an option to continue.</h2>
      <div className="user-options">
        <LoginModal />
        <SignUpModal />
        {/* redirects to Resources page like the mobile app */}
        <button onClick={() => navigate("/resources")} className="guest-option">
          <div>
            <AiOutlineQuestionCircle />
          </div>
          Guest
        </button>
        <div className="forgot-password-and-confirm-code-buttons">
          <ForgotPasswordModal />
          <button className="confirm-code-option" onClick={openModal}>
            Confirm Code
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="confirm-code-modal animate__animated animate__fadeInUpBig animate__faster"
            overlayClassName="confirm-code-modal-overlay"
          >
            <div
              className="form-block"
              style={{ display: currentForm === "confirm" ? "block" : "none" }}
            >
              <ConfirmCode
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
      </div>
    </main>
  );
};

export default LandingPage;
