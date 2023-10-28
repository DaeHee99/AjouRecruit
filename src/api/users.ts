import { GET, POST } from "../utils/axios";

// export const signup = async (data: any) => await POST("/signup", data);
export const login = async (data: {
  loginType: string;
  email: string;
  password: string;
}) => await POST("/api/account/auth", data);

export const sendPasswordEmail = async (email: string) =>
  await GET(`/api/account/find-password?email=${email}`);

export const searchPassword = async (data: {
  email: string;
  code: string;
  newPassword: string;
}) => await POST("/api/account/find-password", data);
