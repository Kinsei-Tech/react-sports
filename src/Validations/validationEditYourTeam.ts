import * as yup from 'yup';

export const schemaEditYourTeam = yup.object().shape({
  name: yup
    .string()
    .min(2, 'No minimo 2 caracteres')
    .required('Nome Obrigatorio'),
  placeName: yup.string(),
  cep: yup
    .number()
    .min(8, 'O CEP deve conter 8 dígitos, sendo todos numéricos')
    .required(),
  state: yup.string(),
  city: yup.string(),
  maxWeight: yup.string(),
  maxAge: yup.string(),
  description: yup.string(),
  positionsSeachedfor: yup.array(),
});
