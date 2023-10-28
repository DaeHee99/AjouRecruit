import { GET, POST } from "../utils/axios";

export const postRecurit = async (data: { boardId: number; message: string }) =>
  await POST("/challenger/create", data, true);

// export const getPresentation = async (userId: number) =>
//   await GET(`/presentation/get/${userId}`, true);
