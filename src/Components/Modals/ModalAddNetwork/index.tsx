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

const ModalAddNetwork = () => {
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

  return (
    <Modal setIsOpenModal={setIsOpenModal}>
      <Container>
        <h2>Adicionar rede</h2>
        <FormStyle>
          <Input
            placeholder='Digite o nome da rede'
            name='name'
            register={register}
            label='Nome'
          />
          <Input
            name='URL'
            placeholder='Digite o endereço da rede'
            register={register}
            label='URL de contato'
          />
          <section>
            <Button color='yellow' width='75%'>
              Adicionar
            </Button>
          </section>
        </FormStyle>
      </Container>
    </Modal>
  );
};

export default ModalAddNetwork;
