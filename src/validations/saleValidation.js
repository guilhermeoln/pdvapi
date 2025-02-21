import * as Yup from "yup";

const saleValidation = Yup.object().shape({
  product_id: Yup.number().required(),
  description: Yup.string(),
  total: Yup.number().required(),
  sale_date: Yup.string().required(),
  payment_mode: Yup.string().required(),
});

export default saleValidation;
