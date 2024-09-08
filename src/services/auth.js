import Cookies from "js-cookie";

export const isAuthenticated = () => {
  const token = Cookies.get("accessToken");
  return !!token;
};

export const setToken = (token) => {
  // set expiration time to 1 day
  Cookies.set("accessToken", token, { expires: 1 });
};

export const getToken = () => {
  return Cookies.get("accesstoken");
};

export const removeToken = () => {
  Cookies.remove("accessToken");
};
