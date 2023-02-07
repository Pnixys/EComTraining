import User from "../../Models/User";

const pnixys: User = {
  id: 1,
  name: "Pnixys",
  email: "pnixys@gmail.com",
  accountAddress: "00000-000000-000000-000000-000005",
  hasAddresses: true,
  accountSold: 10005,
  password: "pnixyspassword",
};

const julien: User = {
  id: 2,
  name: "julien",
  email: "julien@gmail.com",
  accountAddress: "55555-55555-55555-55555-55550",
  hasAddresses: true,
  accountSold: 50001,
  password: "julienpassword",
};

const users: User[] = [pnixys, julien];

export default users;
