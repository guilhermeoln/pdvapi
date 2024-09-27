import jwt from "jsonwebtoken";

const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Não autorizado.");
    }

    const [_, token] = authorization.split(" ");

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;

    next();
  } catch (error) {
    const { message } = error;
    return res.status(401).json({ message });
  }
};

export default verifyToken;
