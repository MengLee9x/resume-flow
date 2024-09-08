import axios from "axios";
import { setToken } from "./auth";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

const API_URL = "http://localhost:5000/users";

export const authenticate = async (username, password) => {
  try {
    const response = await axios.get(
      `${API_URL}?username=${username}&password=${password}`
    );
    const users = response.data;

    if (users.length > 0) {
      const user = users[0];
      const token = uuidv4();
      setToken(token);
      Cookies.set("userRole", user.role, { expires: 1 })
      Cookies.set("userName", user.username, { expires: 1 })
      return { success: true, token };
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    throw new Error("Error during authentication");
  }
};
