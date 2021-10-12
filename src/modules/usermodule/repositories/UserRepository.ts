import { IUser } from "../model/UserModel";
import { BaseRepository } from "./base/BaseRepository";

class UserRepository extends BaseRepository<IUser> {
  public login() {}
  public singOut() {}
}
export default UserRepository;
