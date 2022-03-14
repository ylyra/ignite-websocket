import { injectable } from "tsyringe";
import { MessageModel } from "../schemas/Message";

interface ICreateMessageDTO {
  to: string;
  text: string;
  roomId: string;
}

@injectable()
class CreateMessageService {
  async execute({ to, text, roomId }: ICreateMessageDTO) {
    const message = await MessageModel.create({
      to,
      text,
      roomId,
    });

    return message;
  }
}

export { CreateMessageService };
