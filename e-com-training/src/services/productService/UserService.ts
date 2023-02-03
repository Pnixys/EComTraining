import User from "../../Models/User";
import IUserService from "./IUserService";
import mockdata from "../mock_data/mockdata_users";

export default class UserService implements IUserService {
  getUsers(): User[] {
    return mockdata;
  }

  getUsersById(id: number): User | undefined {
    return mockdata.find((user) => user.id === id);
  }
}
