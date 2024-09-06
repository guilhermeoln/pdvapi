import Sequelize, { Model } from "sequelize";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        value: Sequelize.INTEGER,
        description: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Product;
