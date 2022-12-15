import "./ModalNavigation.css";
import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import {
  IoAirplane,
  IoCheckmarkCircleOutline,
  IoDocumentsOutline,
} from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { HiSquares2X2 } from "react-icons/hi2";

const ModalNavigation = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = (): void => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = (): void => {
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <div className="ModalNavigation">
      <button className="nav-modal-open-btn" onClick={openModal}>
        <HiSquares2X2 />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Navigation Modal"
        className="navigation-modal"
        overlayClassName="nav-modal-overlay "
      >
        <nav>
          <ul>
            <div className="options-container">
              <div className="left-side-menu-options">
                <Link to="/resources">
                  <li className="modal-nav-button" id="resources">
                    <IoDocumentsOutline /> Resources
                  </li>
                </Link>
                <Link to="/lessons">
                  <li className="modal-nav-button" id="lessons">
                    <IoAirplane /> Lessons
                  </li>
                </Link>
              </div>
              <div className="right-side-menu-options">
                <Link to="/tests">
                  <li className="modal-nav-button" id="tests">
                    <IoCheckmarkCircleOutline /> Tests
                  </li>
                </Link>
                <Link to="/community">
                  <li className="modal-nav-button" id="community">
                    <TbMessages /> Community
                  </li>
                </Link>
              </div>
            </div>
          </ul>
        </nav>
        <button className="close-button" onClick={closeModal}>
          dismiss
        </button>
      </Modal>
    </div>
  );
};

export default ModalNavigation;
