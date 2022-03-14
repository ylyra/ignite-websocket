import { injectable } from "tsyringe";
import { MessageModel } from "../schemas/Message";

@injectable()
class GetMessagesByRoomService {
  async execute(roomId: string) {
    const messages = await MessageModel.find({ roomId }).populate("to").exec();

    return messages;
  }
}

export { GetMessagesByRoomService };
