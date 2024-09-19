import * as Yup from "yup";

const sessionValidation = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default sessionValidation;
