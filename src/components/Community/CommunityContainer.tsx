import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_COMMUNITY_POSTS } from "../../GraphQL/Queries";
import AppUser from "../../Models/AppUser";
import { CommunityConversation } from "../../Models/CommunityConversation";
import "./CommunityContainer.css";
import CommunityConversationCard from "./CommunityConversationCard";

interface Props {
  user: AppUser | null;
}

const CommunityContainer = ({ user }: Props) => {
  const [communityConversations, setCommunityConversations] = useState<
    CommunityConversation[]
  >([]);

  const { error, loading, data } = useQuery(GET_COMMUNITY_POSTS);

  useEffect(() => {
    data && setCommunityConversations(data.community_conversation);
  }, [data]);

  if (loading) return <p>"Loading..."</p>;
  if (error) return <p>`Loading error! ${error.message}`</p>;

  return (
    <ul className="CommunityContainer">
      {communityConversations.map((conversation) => (
        <CommunityConversationCard
          key={conversation.id}
          conversation={conversation}
          user={user}
        />
      ))}
    </ul>
  );
};

export default CommunityContainer;
