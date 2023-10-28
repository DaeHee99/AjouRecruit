import { POST } from "../utils/axios";

export const signup = async (data: any) => await POST("/signup", data);
export const login = async (data: any) => await POST("/login", data);
