import { injectable } from "tsyringe";
import { UserModel } from "../schemas/User";

@injectable()
class GetAllUsersService {
  async execute() {
    const users = await UserModel.find();
    return users;
  }
}

export { GetAllUsersService };
