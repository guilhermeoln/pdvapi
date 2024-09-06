import * as Yup from "yup";

const productValidation = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  value: Yup.number().required(),
  quantity: Yup.number().required(),
});

export default productValidation;
