import { Sequelize } from "sequelize";
import dataBaseConfig from "../config/database";
import Product from "../models/Product";
import User from "../models/User";
import Sector from "../models/Sector";
import Sale from "../models/Sale";

const models = [Product, User, Sector, Sale];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models
      .map((model) => {
        model.init(this.connection);
      })
      .map(
        (model) => model?.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
