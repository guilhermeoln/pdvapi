import User from "../models/User";
import userValidation from "../validations/userValidation";

export const users = async (_, res) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

export const createUser = async (req, res) => {
  try {
    await userValidation.validate(req.body);
    const user = await User.create(req.body);

    const { id, username } = user;

    res.json({ id, username });
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};
