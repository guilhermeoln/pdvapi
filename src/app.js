import express from "express";
import routes from "./routes";
import cors from "cors";
import "./database";

const server = express();

server.use(cors()).use(express.json()).use(routes);

export default server;
