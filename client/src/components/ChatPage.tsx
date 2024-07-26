import UserBar from "./chat/UserBar";
import ChatBody from "./chat/ChatBody";
import ChatFooter from "./chat/ChatFooter";

const ChatPage = ({ socket }: any) => {
  return (
    <div className="flex items-center p-4">
      <UserBar />
      <div className="flex flex-col">
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
