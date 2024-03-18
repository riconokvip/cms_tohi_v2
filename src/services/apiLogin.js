// import axios from "axios";
import {APIClient} from "./axiosBase"
export async function login({ userName, password }) {
  try {
    const data = await APIClient.post("/auth/login", {
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
