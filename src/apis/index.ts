import axios from "axios";
import authAPI from "./auth/auth.api";
import brandsAPI from "./brands/brands.api";
import cartAPI from "./cart/cart.api";
import productsAPI from "./products/products.api";

export const client = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
});

const api = {
  auth: authAPI,
  products: productsAPI,
  brands: brandsAPI,
  cart: cartAPI,
};
export default api;
