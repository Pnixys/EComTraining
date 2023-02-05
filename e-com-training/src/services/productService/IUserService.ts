import User from "../../Models/User";

export default interface IUserService {
  getUsers(): User[];
  getUsersById(id: number): User | undefined;

  verifyUserAndPassword(username: string, password: string): number;
}
