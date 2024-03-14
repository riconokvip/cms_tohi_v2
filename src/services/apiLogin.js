// import axios from "axios";
import {APIClient} from "./axiosBase"
export async function login({ userName, password }) {
  try {
    const data = await APIClient.post("/auth/login", {
      userName,
      password,
    });

    return data;
  } catch (e) {
    console.error(e);
  }
}
