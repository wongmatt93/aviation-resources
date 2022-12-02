import AppUser from "./AppUser";

export interface CommunityConversationReplies {
  community_conversation_id: string;
  community_conversation_reply_text: string;
  created_at: string;
  id: string;
  publishing_user_id: string;
  updated_at: string;
  app_user: AppUser;
}

export interface CommunityConversation {
  conversation_text: string;
  created_at: string;
  id: string;
  publishing_user_id: string;
  updated_at: string;
  community_conversation_replies: CommunityConversationReplies[];
  app_user: AppUser;
}
