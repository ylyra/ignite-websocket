import { injectable } from "tsyringe";
import { UserModel } from "../schemas/User";

interface ICreateUserDTO {
  email: string;
  avatar: string;
  socket_id: string;
  name: string;
}

@injectable()
class CreateUserService {
  async execute({ email, avatar, socket_id, name }: ICreateUserDTO) {
    const userAlreadyExists = await UserModel.findOne({ email }).exec();

    if (userAlreadyExists) {
      const user = await UserModel.findOneAndUpdate(
        {
          _id: userAlreadyExists._id,
        },
        {
          $set: {
            socket_id,
            avatar,
            name,
          },
        },
        {
          new: true,
        }
      );
      return user;
    }

    const user = await UserModel.create({
      email,
      socket_id,
      avatar,
      name,
    });

    return user;
  }
}

export { CreateUserService };
