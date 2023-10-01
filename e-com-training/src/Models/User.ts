export default interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  hasAddresses: boolean;
  accountAddress: string;
  accountSold: number;
}
