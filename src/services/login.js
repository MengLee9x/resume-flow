import { setToken } from "./auth";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

export const authenticate = async (username, password) => {
  try {
    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const userName = data.user;
    const userRole = data.role;
    const token = uuidv4()
    setToken(token);
    Cookies.set("userRole", userRole, { expires: 1 })
    Cookies.set("userName", userName, { expires: 1 })
    return { success: true, token: data.token, userName, userRole };
  } catch (error) {
    throw new Error("Error during authentication");
  }
};
