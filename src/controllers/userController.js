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

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    await user.destroy();

    res.send();
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};
