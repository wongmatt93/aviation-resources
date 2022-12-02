import {
  CommunityConversation,
  CommunityConversationReplies,
} from "./CommunityConversation";
import { Lesson } from "./Lesson";
import { Test } from "./Test";

export default interface AppUser {
  created_at: string;
  email: string;
  highest_acs: string | null;
  id: string;
  name: string | null;
  purpose: string | null;
  updated_at: string;
  community_conversations: CommunityConversation[];
  community_conversation_replies: CommunityConversationReplies[];
  lessons: Lesson[];
  tests: Test[];
}
