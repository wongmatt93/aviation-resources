import { useEffect, useState } from "react";
import CommunityConversationReplies from "../../Models/CommunityModels/CommunityConversationReplies";
import "./ConversationRepliesCard.css";

interface Props {
  reply: CommunityConversationReplies;
}

const ConversationRepliesCard = ({ reply }: Props) => {
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    setDateString(
      new Date(reply.created_at).toDateString().split("").splice(3).join("")
    );
  }, [reply]);

  return (
    <li className="ConversationRepliesCard">
      <div className="reply-header">
        <div>
          <p>Created At</p>
          <p>{dateString}</p>
        </div>
        <p>{reply.app_user.name || "Unknown app user"}</p>
      </div>
      <h4>{reply.community_conversation_reply_text}</h4>
    </li>
  );
};

export default ConversationRepliesCard;
