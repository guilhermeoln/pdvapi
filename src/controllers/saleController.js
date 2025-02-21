import Sale from "../models/Sale";
import saleValidation from "../validations/saleValidation";

export const sales = async (_, res) => {
  try {
    const sales = await Sale.findAll();

    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSale = async (req, res) => {
  try {
    await saleValidation.validate(req.body);

    const params = {
      ...req.body,
      user_id: req.userId,
    };

    const sale = await Sale.create(params);

    res.json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
