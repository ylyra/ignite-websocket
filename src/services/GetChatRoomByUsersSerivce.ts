import { ObjectId } from "mongoose";
import { injectable } from "tsyringe";
import { ChatRoomModel } from "../schemas/ChatRoom";

@injectable()
class GetChatRoomByUsersSerivce {
  async execute(idUsers: ObjectId[]) {
    const room = await ChatRoomModel.findOne({
      idUsers: {
        $all: idUsers,
      },
    }).exec();

    return room;
  }
}

export { GetChatRoomByUsersSerivce };
