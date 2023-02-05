import User from "../../Models/User";
import IUserService from "./IUserService";
import mockdata from "../mock_data/mockdata_users";

export default class UserService implements IUserService {
  verifyUserAndPassword(username: string, password: string): number {
    const users = this.getUsers();
    const user = users.find((u) => u.name === username);
    return user !== undefined && user.password === password ? user?.id : -1;
  }

  getUsers(): User[] {
    return mockdata;
  }

  getUsersById(id: number): User | undefined {
    return mockdata.find((user) => user.id === id);
  }
}
