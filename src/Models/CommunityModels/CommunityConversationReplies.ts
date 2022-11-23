import AppUser from "../AppUser";

export default interface CommunityConversationReplies {
  community_conversation_id: string;
  community_conversation_reply_text: string;
  created_at: string;
  id: string;
  publishing_user_id: string;
  updated_at: string;
  app_user: AppUser;
}
