import "./NewCommunityReplyForm.css";
import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { INSERT_COMMUNITY_REPLY } from "../../GraphQL/Mutations";
import { GET_COMMUNITY_POSTS } from "../../GraphQL/Queries";
import AppUser from "../../Models/AppUser";
import { CommunityConversation } from "../../Models/CommunityConversation";

Modal.setAppElement("#root");

interface Props {
  conversation: CommunityConversation;
  user: AppUser | null;
}

const NewCommunityReplyForm = ({ conversation, user }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [addReplyPost, { loading, error }] = useMutation(
    INSERT_COMMUNITY_REPLY,
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
    addReplyPost({
      variables: {
        post_id: conversation.id,
        text: replyContent,
        user_id: user!.id,
      },
    });
    closeModal();
  };

  if (loading) return <p>"Submitting..."</p>;
  if (error) return <p>`Submission error! ${error.message}`</p>;

  return (
    <div className="NewCommunityReplyForm">
      <button onClick={openModal}>Reply</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="new-reply-modal animate__animated animate__fadeInUpBig animate__faster"
        overlayClassName="new-reply-modal-overlay"
      >
        <div className="new-reply-header">
          <h2>Reply</h2>
          <button onClick={closeModal}>close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            name="reply"
            id="reply"
            placeholder="Write New Reply..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
          ></textarea>
          <button>Post</button>
        </form>
      </Modal>
    </div>
  );
};

export default NewCommunityReplyForm;
