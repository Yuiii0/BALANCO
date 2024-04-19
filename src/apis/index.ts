import axios from "axios";
import authAPI from "./auth/auth.api";
import brandsAPI from "./brands/brands.api";
import productsAPI from "./products/products.api";
import cartAPI from "./cart/cart.api";

export const client = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});

const api = {
  auth: authAPI,
  products: productsAPI,
  brands: brandsAPI,
  cart: cartAPI,
};
export default api;
