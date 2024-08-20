export interface Login {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}
export interface LoginObj {
  username?: string;
  email?: string;
  password?: string;
  expiresInMins?: number;
}
