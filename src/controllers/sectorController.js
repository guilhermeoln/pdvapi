import Sector from "../models/Sector";
import sectorValidation from "../validations/sectorValidation";

export const sectors = async (_, res) => {
  try {
    const sectors = await Sector.findAll();

    res.json(sectors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSector = async (req, res) => {
  try {
    await sectorValidation.validate(req.body);
    const sector = await Sector.create(req.body);

    res.json(sector);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

export const sectorById = async (req, res) => {
  try {
    const { id } = req.params;

    const sector = await Sector.findByPk(id);

    if (!sector) {
      return res.status(404).json({ message: "Setor não encontrado." });
    }

    res.json(sector);
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};

export const editSector = async (req, res) => {
  try {
    const { id } = req.params;
    await sectorValidation.validate(req.body);

    await Sector.update(req.body, { where: { id } });

    res.send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSector = async (req, res) => {
  try {
    const { id } = req.params;
    const sector = await Sector.findByPk(id);

    if (!sector) {
      return res.status(404).json({ message: "Setor não encontrado." });
    }

    await sector.destroy();

    res.send();
  } catch (error) {
    const { message } = error;
    res.status(500).json({ message });
  }
};
