import CommunityConversation from "../../Models/CommunityModels/CommunityConversation";
import "./CommunityConversationCard.css";

interface Props {
  conversation: CommunityConversation;
}

const CommunityConversationCard = ({ conversation }: Props) => {
  return (
    <li className="CommunityConversationCard">
      <div className="post-info">
        <div className="date-info">
          <div>
            <p>Posted at</p>
            <p>{conversation.created_at}</p>
          </div>
          <div>
            <p>Latest Activity</p>
            <p>{conversation.updated_at}</p>
          </div>
        </div>
        <p className="app-user">{conversation.app_user.name}</p>
      </div>
      <h3 className="conversation-text">{conversation.conversation_text}</h3>
      <div className="reply-info">
        <p>{`${conversation.community_conversation_replies.length} Replies`}</p>
        <button>Reply</button>
      </div>
    </li>
  );
};

export default CommunityConversationCard;
