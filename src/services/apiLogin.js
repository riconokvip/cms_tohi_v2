import axios from "axios";

export async function login({ userName, password }) {
  try {
    const data = await axios.post("https://api-cms.tohi.live/api/auth/login", {
      userName,
      password,
    });

    return data;
  } catch (e) {
    console.error(e);
  }
}
