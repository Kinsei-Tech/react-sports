import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Nome deve conter no mínimo 2 caracteres")
    .required("Nome obrigatório!"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
    ),
  confirmPassword: yup
    .string()
    .required("Confirmar senha obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem ser as mesmas"),
  height: yup.string(),
  weight: yup.string(),
  age: yup.string().required("Idade obrigatório"),
  cep: yup.string().required("CEP obrigatório"),
  city: yup.string().required("Cidade obrigatória"),
  telephone: yup.string().required("Telefone obrigatório"),
  isDoingSports: yup.string().required("Informação obrigatória"),
  positions: yup.string().required("Posição obrigatória"),
});
