import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  productById,
  products,
} from "./controllers/productController";

const routes = new Router();

routes.get("/products", products);
routes.get("/products/:id", productById);
routes.post("/products", createProduct);
routes.delete("/products/:id", deleteProduct);

export default routes;
