import express, { Express, Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

// configuring environment variables
dotenv.config();

// initializing the express application
const app: Express = express();
const port = process.env.PORT || 3000;

// Creating an http server
const server = http.createServer(app);

// Initialize socket.io with cors
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// creating a socket endpoint
io.on("connection", (socket) => {
  console.log("a user connected");

  // creating a socket endpoint
  socket.on("message", (data) => {
    console.log("Message received:", data);
    // You can also emit a response back to the client if needed
    socket.emit("response", "Message received");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
