import { GET, POST } from "../utils/axios";

export const createBoard = async (data: {
  title: string;
  body: string;
  memberId: number;
  tags: string[];
  dueDate: string;
}) => await POST("/board/create", data, true);

export const updateBoard = async (data: {
  title: string;
  body: string;
  boardId: number;
  tags: string[];
  dueDate: string;
}) => await POST("/board/update", data, true);

export const getAllBoard = async () => await GET("/board/all", true);

export const getCategoryBoard = async (category: string) =>
  await GET(`/board/tags/${category}`, true);

export const getTargetBoard = async (boardId: number) =>
  await GET(`/board/find/${boardId}`, true);
