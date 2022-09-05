import { useContext, useEffect } from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from '..';
import { AuthContext } from '../../../Contexts/AuthContext';
import Input from '../../Input';
import Button from '../../Button';
import FormStyle from '../../Forms/style';
import { Container } from '../style';
import Label from '../../Label';
import FieldSet from '../../Fieldset';

const ModalCreateYourTeam = () => {
  const { setIsOpenModal } = useContext(AuthContext);

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Nome da rede com mínimo de 2 dígitos')
      .required('Nome da rede obrigatório'),
    URL: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Link inválido'
      )
      .required('Link obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema) });

  const addressArr = [
    { name: 'cep', placeholder: 'Digite o CEP', label: 'CEP' },
    { name: 'state', placeholder: 'Digite o estado', label: 'Estado' },
    { name: 'city', placeholder: 'Digite a cidade', label: 'Cidade' },
  ];

  const positionsArr = [
    { label: 'Goleiro', name: 'positionsSearchedFor', value: 'goalkeeper' },
    { label: 'Fixo', name: 'positionsSearchedFor', value: 'fixed' },
    { label: 'Pivô', name: 'positionsSearchedFor', value: 'target' },
    { label: 'Ala Esquerda', name: 'positionsSearchedFor', value: 'left wing' },
    { label: 'Ala Direita', name: 'positionsSearchedFor', value: 'right wing' },
  ];

  return (
    <Modal expandedModal setIsOpenModal={setIsOpenModal}>
      <Container>
        <h2>Forme seu Time</h2>
        <FormStyle>
          <article>
            <Input
              placeholder='Digite o nome do grupo'
              name='name'
              register={register}
              label='Nome do Grupo'
            />
            <Input
              name='placeName'
              placeholder='Digite o nome do local'
              register={register}
              label='Local'
            />
            <Input
              name='maxWeight'
              placeholder='Digite o peso máximo'
              type='number'
              register={register}
              label='Peso'
            />
            <Input
              name='maxAge'
              placeholder='Digite a idade máxima'
              type='number'
              register={register}
              label='Idade'
            />
            <Input
              name='description'
              placeholder='O que procura?'
              register={register}
              label='Descrição'
            />
            <FieldSet
              type='textInput'
              legend='Endereço do local'
              register={register}
              textInputArr={addressArr}
            />
            <FieldSet
              type='checkbox'
              legend='Qual posição busca para o time?'
              register={register}
              checkboxArr={positionsArr}
            />
          </article>
          <section>
            <Button color='yellow' width='75%'>
              Criar
            </Button>
          </section>
        </FormStyle>
      </Container>
    </Modal>
  );
};

export default ModalCreateYourTeam;
