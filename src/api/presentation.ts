import { GET, POST } from "../utils/axios";

export const updatePresentation = async (data: { body: string }) =>
  await POST("/presentation/update", data, true);

export const getPresentation = async (userId: number) =>
  await GET(`/presentation/get/${userId}`, true);
