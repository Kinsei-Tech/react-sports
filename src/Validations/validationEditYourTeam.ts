import * as yup from 'yup';

export const schemaEditYourTeam = yup.object().shape({
  name: yup
    .string()
    .min(2, 'No minimo 2 caracteres')
    .required('Nome Obrigatorio'),
  placeName: yup.string(),
  cep: yup.number(),
  state: yup.string().required('Campo obrigatorio'),
  city: yup.string().required('Campo Obrigatorio'),
  maxWeight: yup.number(),
  maxAge: yup.number(),
  description: yup.string(),
  positionsSeachedfor: yup.array(),
});
