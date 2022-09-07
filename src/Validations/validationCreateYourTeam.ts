import * as yup from 'yup';

export const schemaCreateYourTeam = yup.object().shape({
  name: yup
    .string()
    .min(2, 'No minimo 2 caracteres')
    .required('Nome Obrigatorio'),
  placeName: yup.string(),
  cep: yup
    .string()
    .min(8, 'O CEP deve conter 8 dígitos, sendo todos numéricos'),
  state: yup.string().required('Campo obrigatorio'),
  city: yup.string().required('Campo Obrigatorio'),
  maxWeight: yup.string(),
  maxAge: yup.string(),
  description: yup.string(),
  positionsSeachedfor: yup.array(),
});
