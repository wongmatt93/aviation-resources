import AppUser from "../AppUser";
import CommunityConversationReplies from "./CommunityConversationReplies";

export default interface CommunityConversation {
  conversation_text: string;
  created_at: string;
  id: string;
  publishing_user_id: string;
  updated_at: string;
  community_conversation_replies: CommunityConversationReplies[];
  app_user: AppUser;
}
