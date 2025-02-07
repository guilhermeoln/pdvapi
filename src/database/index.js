import { Sequelize } from "sequelize";
import dataBaseConfig from "../config/database";
import Product from "../models/Product";
import User from "../models/User";
import Sector from "../models/Sector";

const models = [Product, User, Sector];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map((model) => {
      model.init(this.connection);
    });
  }
}

export default new Database();
