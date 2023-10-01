import User from "../../Models/User";

export default interface IUserService {
  // Get all users
  getUsers(): User[];

  // get user with the specified id
  getUserById(id: number): User | undefined;

  // Verify if the user with the specified username and password and return is Id
  // return -1 if user doesn't exist
  verifyUserAndPassword(username: string, password: string): number;

  // Add user to the database and return the Id of the new user
  // return -1 something wrong happen
  addUser(username: string, password: string, email: string): number;
}
