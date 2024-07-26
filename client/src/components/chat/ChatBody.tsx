import { useNavigate } from "react-router-dom";

const ChatBody = () => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex flex-col">
      <header className="flex items-center gap-4">
        <p className="font-semibold text-xl">Handout with Colleagues</p>
        <button
          className="p-4 bg-red-700 text-white font-bold rounded-md hover:bg-white hover:text-red-700 border-2 border-red-700 transition-all ease-in-out duration-300"
          onClick={handleLeaveChat}
        >
          Leave Chat
        </button>
      </header>
      <main>
        <div>
          <p>user</p>
          <p>Message</p>
        </div>
      </main>
    </div>
  );
};

export default ChatBody;
