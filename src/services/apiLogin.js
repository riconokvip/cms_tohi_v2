import axios from "axios";
import { API_ENDPOINT } from "./endpoints";

export async function login({ userName, password }) {
  try {
    const data = await axios.post(`${API_ENDPOINT}/auth/login`, {
      userName,
      password,
    });

    return data;
  } catch (error) {
    console.error("login", error.message);
  }
}

export async function refreshToken({ userName, password }) {
  try {
    //TODO: refresh token logic
  } catch (error) {
    console.error("login", error.message);
  }
}
