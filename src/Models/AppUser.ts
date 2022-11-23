import CommunityConversation from "./CommunityModels/CommunityConversation";
import CommunityConversationReplies from "./CommunityModels/CommunityConversationReplies";

export default interface AppUser {
  created_at: string;
  email: string;
  highest_acs: string;
  id: string;
  name: string;
  purpose: string;
  updated_at: string;
  community_conversations: CommunityConversation[];
  community_conversation_replies: CommunityConversationReplies[];
}
