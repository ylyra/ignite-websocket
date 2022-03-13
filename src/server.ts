import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";

const port = process.env.PORT || process.env.DEFAULT_PORT;
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors());
app.use(helmet());

app.use(express.static(path.join(process.cwd(), "public")));

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

app.get("/", (_, res) => {
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(`Listening on port ${port} 🚀`);
});
