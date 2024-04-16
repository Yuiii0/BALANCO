import axios from "axios";
import authAPI from "./auth/auth.api";

export const client = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});

const api = {
  auth: authAPI,
};
export default api;
