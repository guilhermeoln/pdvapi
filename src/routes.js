import { Router } from "express";
import * as ProductController from "./controllers/productController";
import * as UserController from "./controllers/userController";
import * as SessionController from "./controllers/sessionController";
import * as SectorController from "./controllers/sectorController";
import verifyToken from "./middlewares/verifyToken";

const routes = new Router();

routes.get("/products", verifyToken, ProductController.products);
routes.get("/products/:id", verifyToken, ProductController.productById);
routes.post("/products", verifyToken, ProductController.createProduct);
routes.put("/products/:id", verifyToken, ProductController.editProduct);
routes.delete("/products/:id", verifyToken, ProductController.deleteProduct);

routes.get("/users", verifyToken, UserController.users);
routes.post("/users", UserController.createUser);
routes.put("/users/:id", verifyToken, UserController.editUser);
routes.get("/users/:id", verifyToken, UserController.userById);
routes.delete("/users/:id", verifyToken, UserController.deleteUser);

routes.post("/session", SessionController.session);

routes.get("/sectors", verifyToken, SectorController.sectors);
routes.post("/sectors", verifyToken, SectorController.createSector);
routes.put("/sectors/:id", verifyToken, SectorController.editSector);
routes.get("/sectors/:id", verifyToken, SectorController.sectorById);
routes.delete("/sectors/:id", verifyToken, SectorController.deleteSector);

export default routes;
