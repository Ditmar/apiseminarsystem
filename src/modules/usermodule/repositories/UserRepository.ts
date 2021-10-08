import { IUser } from "../model/UserModel";
import { BaseRepository } from "./base/BaseRepository";

export class UserRepository<IUser> extends BaseRepository<IUser> {
  public login() {}
  public singOut() {}
}
