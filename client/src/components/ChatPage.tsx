import UserBar from "./chat/UserBar";
import ChatBody from "./chat/ChatBody";
import ChatFooter from "./chat/ChatFooter";

const ChatPage = ({ socket }: any) => {
  return (
    <div className="flex items-center w-screen">
      <UserBar />
      <div className="flex flex-col h-screen w-screen">
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
