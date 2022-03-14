import { injectable } from "tsyringe";
import { ChatRoomModel } from "../schemas/ChatRoom";

@injectable()
class GetChatRoomByIdService {
  async execute(idChatRoom: string) {
    const room = await ChatRoomModel.findOne({
      idChatRoom,
    })
      .populate("idUsers")
      .exec();

    return room;
  }
}

export { GetChatRoomByIdService };
