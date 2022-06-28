import axios from "axios";
import { Product } from "../types/product.type";

const URL_BASE = "http://localhost:3004/products";

export const getAllProducts = (): Promise<Product[]> =>
  axios
    .get(`${URL_BASE}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const getProductById = (id: any): Promise<Product> =>
  axios
    .get(`${URL_BASE}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export const saveProduct = (product: Product): Promise<Product> =>
  axios
    .post(`${URL_BASE}`, product)
    .then((res) => res.data)
    .catch((err) => console.error(err));
