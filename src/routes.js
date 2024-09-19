import { Router } from "express";
import * as ProductController from "./controllers/productController";
import * as UserController from "./controllers/userController";
import * as SessionController from "./controllers/sessionController";

const routes = new Router();

// TODO: EDITAR PRODUTO

routes.get("/products", ProductController.products);
routes.get("/products/:id", ProductController.productById);
routes.post("/products", ProductController.createProduct);
routes.delete("/products/:id", ProductController.deleteProduct);

// TODO: EDITAR USUÁRIO E BUSCAR POR ID
routes.get("/users", UserController.users);
routes.post("/users", UserController.createUser);
routes.delete("/users/:id", UserController.deleteUser);

routes.post("/session", SessionController.session);

export default routes;
