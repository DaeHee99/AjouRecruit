import { GET, POST } from "../utils/axios";

export const createBoard = async (data: {
  title: string;
  body: string;
  memberId: number;
  tags: string[];
  dueDate: string;
}) => await POST("/board/create", data, true);
