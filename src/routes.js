import { Router } from "express";
import * as ProductController from "./controllers/productController";
import * as UserController from "./controllers/userController";
import * as SessionController from "./controllers/sessionController";
import verifyToken from "./middlewares/verifyToken";

const routes = new Router();

// TODO: EDITAR PRODUTO

routes.get("/products", verifyToken, ProductController.products);
routes.get("/products/:id", verifyToken, ProductController.productById);
routes.post("/products", verifyToken, ProductController.createProduct);
routes.delete("/products/:id", verifyToken, ProductController.deleteProduct);

// TODO: EDITAR USUÁRIO E BUSCAR POR ID
routes.get("/users", verifyToken, UserController.users);
routes.post("/users", UserController.createUser);
routes.delete("/users/:id", verifyToken, UserController.deleteUser);

routes.post("/session", SessionController.session);

export default routes;
