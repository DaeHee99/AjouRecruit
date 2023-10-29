import { GET, POST } from "../utils/axios";

export const postRecurit = async (data: { boardId: number; message: string }) =>
  await POST("/challenger/create", data, true);

export const getRecuritData = async (userId: number) =>
  await GET(`/challenger/list/${userId}`, true);
