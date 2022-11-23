import { useEffect, useState } from "react";
import CommunityConversation from "../../Models/CommunityModels/CommunityConversation";
import "./CommunityConversationCard.css";
import ConversationRepliesContainer from "./ConversationRepliesContainer";

interface Props {
  conversation: CommunityConversation;
}

const CommunityConversationCard = ({ conversation }: Props) => {
  const [createdDate, setCreatedDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  useEffect(() => {
    setCreatedDate(
      new Date(conversation.created_at)
        .toDateString()
        .split("")
        .splice(3)
        .join("")
    );
    setUpdatedDate(
      new Date(conversation.updated_at)
        .toDateString()
        .split("")
        .splice(3)
        .join("")
    );
  }, [conversation]);

  return (
    <li className="CommunityConversationCard">
      <div className="post-info">
        <div className="date-info">
          <div>
            <p>Posted at</p>
            <p>{createdDate}</p>
          </div>
          <div>
            <p>Latest Activity</p>
            <p>{updatedDate}</p>
          </div>
        </div>
        <p className="app-user">
          {conversation.app_user.name || "Unknown app user"}
        </p>
      </div>
      <h3 className="conversation-text">{conversation.conversation_text}</h3>
      <div className="reply-info">
        <ConversationRepliesContainer
          replies={conversation.community_conversation_replies}
          conversation={conversation.conversation_text}
        />
        <button>Reply</button>
      </div>
    </li>
  );
};

export default CommunityConversationCard;
