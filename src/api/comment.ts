import { GET, POST } from "../utils/axios";

export const createComment = async (data: {
  boardId: number;
  memberId: number;
  commentBody: string;
}) => await POST("/comments/create", data, true);

// export const updateBoard = async (data: {
//   title: string;
//   body: string;
//   boardId: number;
//   tags: string[];
//   dueDate: string;
// }) => await POST("/board/update", data, true);

// export const deleteBoard = async (data: { boardId: number }) =>
//   await POST("/board/delete", data, true);

// export const finishBoard = async (data: { boardId: number }) =>
//   await POST("/board/finish", data, true);

export const getAllComment = async (boardId: number) =>
  await GET(`/comments/${boardId}`, true);

// export const getCategoryBoard = async (category: string) =>
//   await GET(`/board/tags/${category}`, true);

// export const getTargetBoard = async (boardId: number) =>
//   await GET(`/board/find/${boardId}`, true);
