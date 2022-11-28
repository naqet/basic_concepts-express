export default interface IUserPayload {
  email: string;
  name: string | null;
  passwordHash: string;
}
