import "./NewCommunityPostForm.css";
import Modal from "react-modal";
import { FormEvent, useState } from "react";

Modal.setAppElement("#root");

const NewCommunityPostForm = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className="NewCommunityPostForm">
      <button onClick={openModal}>New Post</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="new-post-modal"
        overlayClassName="new-post-modal-overlay"
      >
        <div className="new-post-header">
          <h2>New Post</h2>
          <button onClick={closeModal}>close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            name="post"
            id="post"
            placeholder="Write New Post..."
          ></textarea>
          <button>Post</button>
        </form>
      </Modal>
    </div>
  );
};

export default NewCommunityPostForm;
