import Product from "../models/Product";
import productValidation from "../validations/productValidation";

export const products = async (_, res) => {
  try {
    const products = await Product.findAll();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    await productValidation.validate(req.body);

    const product = await Product.create(req.body);

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const productById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(401).json({ message: "Produto não encontrado." });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(401).json({ message: "Produto não encontrado." });
    }

    await product.destroy();

    await res.json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
