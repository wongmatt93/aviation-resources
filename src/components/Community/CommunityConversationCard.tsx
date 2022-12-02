import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { DELETE_COMMUNITY_POST } from "../../GraphQL/Mutations";
import { GET_COMMUNITY_POSTS } from "../../GraphQL/Queries";
import AppUser from "../../Models/AppUser";
import { CommunityConversation } from "../../Models/CommunityConversation";
import "./CommunityConversationCard.css";
import ConversationRepliesContainer from "./ConversationRepliesContainer";
import NewCommunityReplyForm from "./NewCommunityReplyForm";

interface Props {
  conversation: CommunityConversation;
  user: AppUser | null;
}

const CommunityConversationCard = ({ conversation, user }: Props) => {
  const [deletePost] = useMutation(DELETE_COMMUNITY_POST, {
    refetchQueries: [{ query: GET_COMMUNITY_POSTS }],
  });
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

  const handleDelete = (): void => {
    deletePost({ variables: { id: conversation.id } });
  };

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
        <p className="app-user">{conversation.app_user.name}</p>
      </div>
      <h3 className="conversation-text">{conversation.conversation_text}</h3>
      <div className="reply-info">
        <ConversationRepliesContainer
          replies={conversation.community_conversation_replies}
          conversation={conversation.conversation_text}
        />
        <NewCommunityReplyForm conversation={conversation} user={user} />
        {conversation.publishing_user_id === user!.id && (
          <button onClick={handleDelete}>Delete</button>
        )}
      </div>
    </li>
  );
};

export default CommunityConversationCard;
