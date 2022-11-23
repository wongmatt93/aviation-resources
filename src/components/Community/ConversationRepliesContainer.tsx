import "./ConversationRepliesContainer.css";
import Modal from "react-modal";
import { useState } from "react";
import CommunityConversationReplies from "../../Models/CommunityModels/CommunityConversationReplies";
import ConversationRepliesCard from "./ConversationRepliesCard";

Modal.setAppElement("#root");

interface Props {
  conversation: string;
  replies: CommunityConversationReplies[];
}

const ConversationRepliesContainer = ({ conversation, replies }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  return (
    <div className="ConversationRepliesContainer">
      <button onClick={openModal}>{`${replies.length} Replies`}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="replies-modal"
        overlayClassName="replies-modal-overlay"
      >
        <div className="replies-header">
          <h2>Replies</h2>
          <button onClick={closeModal}>close</button>
        </div>
        <div className="conversation-block">
          <p className="title">Conversation</p>
          <h3>{conversation}</h3>
        </div>
        <div className="replies-block">
          <p className="title">Replies</p>
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
