import { injectable } from "tsyringe";
import { ChatRoomModel } from "../schemas/ChatRoom";

@injectable()
class CreateChatRoomService {
  async execute(idUsers: string[]) {
    console.log(idUsers);
    const room = await ChatRoomModel.create({
      idUsers,
    });

    return room;
  }
}

export { CreateChatRoomService };
