import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    navigate("/chat");
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <form action="" onSubmit={handleSubmit} className="border-2 border-black shadow-2xl rounded-xl p-14 flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
        <h2 className="font-bold text-black text-center mb-6 text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">Sign in to chat</h2>
        <label htmlFor="" className="font-semibold">Username</label>
        <input
          type="text"
          minLength={6}
          name="username"
          placeholder="Enter your name"
          className="border-2 border-[#d2d2d2] rounded-md p-2 mb-2 w-full"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="w-full bg-blue-700 text-white p-2 font-bold rounded-md border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition-all ease-in-out duration-300">Sign In</button>
      </form>
    </main>
  );
};

export default Home;
