import User from "../models/User";
import sessionValidation from "../validations/sessionValidation";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const dotenv = require("dotenv");
dotenv.config();

const jwtConfig = {
  expiresIn: "7d",
};

export const session = async (req, res) => {
  try {
    await sessionValidation.validate(req.body);
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário incorreto." });
    }

    const { password_hash, id } = user.dataValues;

    const passwordIsValid = await bcrypt.compare(password, password_hash);

    if (!passwordIsValid) {
      return res.status(404).json({ message: "Senha inválida" });
    }

    res.json({
      token: jwt.sign({ id }, process.env.JWT_SECRET_KEY, jwtConfig),
    });
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};
