import { injectable } from "tsyringe";
import { UserModel } from "../schemas/User";

@injectable()
class GetUserBySocketIdService {
  async execute(socket_id: string) {
    const user = await UserModel.findOne({ socket_id }).exec();

    return user;
  }
}

export { GetUserBySocketIdService };
