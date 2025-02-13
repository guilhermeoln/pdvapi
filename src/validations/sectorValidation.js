import * as Yup from "yup";

const sectorValidation = Yup.object().shape({
  name: Yup.string().required(),
});

export default sectorValidation;
