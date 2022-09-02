import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
    ),
});
