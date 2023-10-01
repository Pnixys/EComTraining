import User from "../../Models/User";
import IUserService from "./IUserService";
import mockdata from "../mock_data/mockdata_users";

export default class UserService implements IUserService {
  addUser(username: string, password: string, email: string): number {
    if (!mockdata.some((usr) => usr.name === username || usr.email === email)) {
      let maxId = 0;
      mockdata.forEach((user) => {
        if (user.id > maxId) {
          maxId = user.id;
        }
      });

      const user: User = {
        id: maxId + 1,
        name: username,
        password: password,
        email: email,
        hasAddresses: false,
        accountAddress: "",
        accountSold: 0,
      };
      mockdata.push(user);
      return user.id;
    }
    return -1;
  }

  verifyUserAndPassword(username: string, password: string): number {
    const users = this.getUsers();
    const user = users.find((u) => u.name === username);
    return user !== undefined && user.password === password ? user?.id : -1;
  }

  getUsers(): User[] {
    return mockdata;
  }

  getUserById(id: number): User | undefined {
    return mockdata.find((user) => user.id === id);
  }
}
