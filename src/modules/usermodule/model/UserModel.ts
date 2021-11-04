import { Mongoose, Schema, Document } from "mongoose";
export interface IAvatar {
  url: string;
  path: string;
}
export interface IUser {
  name?: string;
  email?: string;
  password?: string;
  avatar?: Array<IAvatar>;
}
export interface User extends Document, IUser {
  createAt: Date;
  updateAt: Date;
}
const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => {
        return /^[\w\.]+@\w+[.][\w]{2,3}$/.test(v);
      },
      message: (props: any) => `${props.value} no es un corre valido`,
    },
  },
  password: { type: String, required: true },
  avatar: { type: Array, required: false },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date },
});
export const createModel = (mongoose: Mongoose) => {
  return mongoose.model<User>("user", userSchema);
};
