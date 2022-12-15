import "./ConversationRepliesContainer.css";
import Modal from "react-modal";
import { useState } from "react";
import ConversationRepliesCard from "./ConversationRepliesCard";
import { CommunityConversationReplies } from "../../Models/CommunityConversation";

Modal.setAppElement("#root");

interface Props {
  conversation: string;
  replies: CommunityConversationReplies[];
}

const ConversationRepliesContainer = ({ conversation, replies }: Props) => {
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
    <div className="ConversationRepliesContainer">
      <button onClick={openModal}>{`${replies.length} Replies`}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="replies-modal animate__animated animate__fadeInUpBig animate__faster"
        overlayClassName="replies-modal-overlay"
      >
        <div className="replies-header">
          <h2>Replies</h2>
          <button onClick={closeModal}>close</button>
        </div>
        <div className="conversation-block">
          <p className="section-title">Conversation</p>
          <h3 className="conversation">{conversation}</h3>
        </div>
        <div className="replies-block">
          <p className="section-title">Replies</p>
          {replies.length ? (
            <ul>
              {replies.map((reply) => (
                <ConversationRepliesCard key={reply.id} reply={reply} />
              ))}
            </ul>
          ) : (
            <p className="no-replies">No replies found</p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ConversationRepliesContainer;
