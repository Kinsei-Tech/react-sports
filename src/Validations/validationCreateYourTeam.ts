import * as yup from 'yup';

export const schemaCreateYourTeam = yup.object().shape({
  name: yup
    .string()
    .min(2, 'O nome deve conter no mínimo 2 caracteres')
    .required('Nome Obrigatório'),
  placeName: yup.string(),
  cep: yup
    .string()
    .min(8, 'O CEP deve conter 8 dígitos, sendo todos numéricos'),
  state: yup.string(),
  city: yup.string(),
  maxWeight: yup.string(),
  maxAge: yup.string(),
  description: yup
    .string()
    .required('Descrição obrigatória')
    .min(3, 'A descrição deve conter no mínimo 3 caracteres'),
  positionsSeachedfor: yup.array(),
  urlImg: yup.string(),
});
