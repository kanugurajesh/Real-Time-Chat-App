import { useState } from "react";

const ChatFooter = () => {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-green-800 text-white font-semibold p-2 px-4 rounded-md hover:bg-white hover:text-green-800 border-2 border-green-800 transition-all ease-in-out duration-300">Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
