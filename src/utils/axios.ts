import axios from "axios";
import properties from "../config/properties";

interface fetchType {
  method: string;
  url: string;
  body?: any;
  auth: boolean;
}

const fetchWrap = async ({ method, url, body, auth }: fetchType) => {
  try {
    const config = {
      baseURL: auth ? properties.mainURL : properties.baseURL,
      withCredentials: true,
      headers: {},
    };

    if (auth === true) {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    }

    const { data } =
      (method === "get" && (await axios.get(url, config))) ||
      (method === "post" && (await axios.post(url, body, config))) ||
      (method === "patch" && (await axios.patch(url, body, config))) ||
      (method === "delete" && (await axios.delete(url, config))) ||
      {};

    return data;
  } catch (error) {
    throw error;
  }
};

export const GET = (url: string, auth = false) =>
  fetchWrap({ method: "get", url, auth });

export const POST = (url: string, body: any, auth = false) =>
  fetchWrap({ method: "post", url, body, auth });

export const PATCH = (url: string, body: any, auth = false) =>
  fetchWrap({ method: "patch", url, body, auth });

export const DELETE = (url: string, auth = false) =>
  fetchWrap({ method: "delete", url, auth });
