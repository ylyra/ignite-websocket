import mongoose, { Document, Schema } from "mongoose";

export type User = Document & {
  email: string;
  socket_id: string;
  name: string;
  avatar: string;
};

const UserSchema = new Schema({
  email: String,
  socket_id: String,
  name: String,
  avatar: String,
});

const UserModel = mongoose.model<User>("Users", UserSchema);

export { UserModel };
