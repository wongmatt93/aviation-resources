import "./NewCommunityPostForm.css";
import Modal from "react-modal";
import { FormEvent, useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { INSERT_COMMUNITY_POST } from "../../GraphQL/Mutations";
import { GET_COMMUNITY_POSTS } from "../../GraphQL/Queries";
import AuthContext from "../../Context/AuthContext";
import "animate.css";

Modal.setAppElement("#root");

const NewCommunityPostForm = () => {
  const { user } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [addCommunityPost, { loading, error }] = useMutation(
    INSERT_COMMUNITY_POST,
    {
      refetchQueries: [{ query: GET_COMMUNITY_POSTS }],
    }
  );

  const openModal = (): void => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = (): void => {
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addCommunityPost({
      variables: { id: user!.id, text: postContent },
    });
    closeModal();
  };

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>`Submission error! ${error.message}`</p>;

  return (
    <div className="NewCommunityPostForm">
      <button onClick={openModal}>New Post</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="new-post-modal animate__animated animate__fadeInUpBig animate__faster"
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
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
          <button>Post</button>
        </form>
      </Modal>
    </div>
  );
};

export default NewCommunityPostForm;
