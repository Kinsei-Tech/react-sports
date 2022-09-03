import * as yup from 'yup';
//corrigir os tipos de dados
export const schemaEditProfile = yup.object().shape({
  urlImg: yup.string(),
  email: yup.string().email('Email inválido'),
  name: yup.string(),
  cep: yup.string(),
  state: yup.string(),
  city: yup.string(),
  telephone: yup.string(),
  isExercising: yup.string(),
  positions: yup.array(),
});
