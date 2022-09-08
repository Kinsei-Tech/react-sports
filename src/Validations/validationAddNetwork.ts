import * as yup from 'yup';

export const schemaAddNetwork = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Nome da rede com mínimo de 2 dígitos')
    .required('Nome da rede obrigatório'),
  url: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Link inválido'
    )
    .required('Link obrigatório'),
});
