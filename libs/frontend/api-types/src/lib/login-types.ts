export type LoginInput = {
  username: string;
  password: string;
}

export type LoginResponse = {
  success: boolean;
  token?: string;
  userId?: number;
  error?: string;
}

