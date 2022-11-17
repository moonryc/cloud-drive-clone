export type LoginInput = {
  username: string;
  password: string;
}

export enum Perm {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export type User = {
  id: number|null;
  name: string|null;
  perm: Perm|null;
}

export type LoginResponse = {
  success: boolean;
  err: string | null;
  token?: string | null;
  user: User;
}

