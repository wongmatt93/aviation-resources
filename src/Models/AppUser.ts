import CommunityConversation from "./CommunityModels/CommunityConversation";
import CommunityConversationReplies from "./CommunityModels/CommunityConversationReplies";
import { Lesson } from "./LessonsModels/Lesson";
import Test from "./TestsModels/Test";

export default interface AppUser {
  created_at: string;
  email: string;
  highest_acs: string;
  id: string;
  name: string | null;
  purpose: string | null;
  updated_at: string;
  community_conversations: CommunityConversation[];
  community_conversation_replies: CommunityConversationReplies[];
  lessons: Lesson[];
  tests: Test[];
}
