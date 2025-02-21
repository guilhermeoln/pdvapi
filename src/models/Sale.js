import Sequelize, { Model } from "sequelize";

class Sale extends Model {
  static init(sequelize) {
    super.init(
      {
        product_id: Sequelize.INTEGER,
        description: Sequelize.STRING,
        total: Sequelize.INTEGER,
        sale_date: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
        payment_mode: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Product, { foreignKey: "product_id", as: "product" });
  }
}

export default Sale;
