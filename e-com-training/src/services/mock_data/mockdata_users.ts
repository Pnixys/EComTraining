import User from "../../Models/User";

const pnixys: User = {
  id: 1,
  name: "Pnixys",
  accountAddress: "00000-000000-000000-000000-000005",
  accountSold: 10005,
  password: "pnixyspassword",
};

const julien: User = {
  id: 1,
  name: "julien",
  accountAddress: "55555-55555-55555-55555-55550",
  accountSold: 50001,
  password: "julienpassword",
};

const users: User[] = [pnixys, julien];

export default users;
