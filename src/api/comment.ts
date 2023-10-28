import { GET, POST } from "../utils/axios";

export const createComment = async (data: {
  boardId: number;
  memberId: number;
  commentBody: string;
}) => await POST("/comments/create", data, true);

export const deleteComment = async (data: { commentId: number }) =>
  await POST("/comments/delete", data, true);

export const getAllComment = async (boardId: number) =>
  await GET(`/comments/${boardId}`, true);
