import "reflect-metadata";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
mongoose.connect("mongodb://localhost/rocketscoket");
const io = new Server(server);

app.use(express.static(path.join(process.cwd(), "public")));

io.on("connection", (socket) => {});

export { server, io };
