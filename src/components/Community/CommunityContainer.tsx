import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_COMMUNITY_POSTS } from "../../GraphQL/Queries";
import CommunityConversation from "../../Models/CommunityModels/CommunityConversation";
import "./CommunityContainer.css";
import CommunityConversationCard from "./CommunityConversationCard";

const CommunityContainer = () => {
  const [communityConversations, setCommunityConversations] = useState<
    CommunityConversation[]
  >([]);

  const { error, loading, data } = useQuery(GET_COMMUNITY_POSTS);

  useEffect(() => {
    data && setCommunityConversations(data.community_conversation);
  }, [data]);

  return (
    <ul className="CommunityContainer">
      {communityConversations.map((conversation) => (
        <CommunityConversationCard
          key={conversation.id}
          conversation={conversation}
        />
      ))}
    </ul>
  );
};

export default CommunityContainer;
