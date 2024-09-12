import { Sequelize } from "sequelize";
import dataBaseConfig from "../config/database";
import Product from "../models/Product";
import User from "../models/User";

const models = [Product, User];

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
