import * as yup from 'yup';

export const schemaLogin = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      'A senha deve conter 8 caracteres, ao menos uma letra maiúscula, uma minúscula, um número e um caractere especial'
    ),
});
