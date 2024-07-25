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
      <form action="" onSubmit={handleSubmit} className="w-56 border-2 border-black shadow-2xl rounded-md p-4 flex flex-col gap-4">
        <h2 className="font-semibold text-black text-center mb-4 text-xl">Sign in to chat</h2>
        <label htmlFor="" className="font-semibold">Username</label>
        <input
          type="text"
          minLength={6}
          name="username"
          className="border-2 border-black rounded-sm p-1 mb-2"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="w-full bg-black text-white p-2 font-bold rounded-md border-2 border-black hover:bg-white hover:text-black transition-all ease-in-out duration-300">Sign In</button>
      </form>
    </main>
  );
};

export default Home;
