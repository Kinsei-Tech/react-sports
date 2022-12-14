import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Nome deve conter no mínimo 2 caracteres')
    .required('Nome obrigatório!'),
  urlImg: yup.string(),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      'Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial'
    ),
  confirmPassword: yup
    .string()
    .required('Confirmar senha obrigatório')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  height: yup.string(),
  weight: yup.string(),
  age: yup.string(),
  cep: yup
    .string()
    .min(8, 'O CEP deve conter 8 dígitos, sendo todos numéricos')
    .required('CEP obrigatório'),
  city: yup.string(),
  telephone: yup.string(),
  isExercising: yup.string(),
  positions: yup.array(),
});
