import * as Yup from "yup";

const userValidation = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default userValidation;
