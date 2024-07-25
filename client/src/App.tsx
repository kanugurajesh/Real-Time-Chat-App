// import { RootState } from "./app/store";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./app/features/counter/counterSlice";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

function App() {

  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  // const handleSubmit = () => {
  //   socket.emit("message", "Rajesh");
  //   socket.on("response", (data) => console.log(data));
  // };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
