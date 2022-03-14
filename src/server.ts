import { server } from "./http";
import "./websocket/ChatService";

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`Listening on port ${port} 🚀`);
});
