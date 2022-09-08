import { useContext } from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from '..';
import { AuthContext } from '../../../Contexts/AuthContext';
import Input from '../../Input';
import Button from '../../Button';
import FormStyle from '../../Forms/style';
import { Container } from '../style';
import ErrorMessage from '../../InputErrorMessage';
import { schemaAddNetwork } from '../../../Validations/validationAddNetwork';

const ModalAddNetwork = () => {
  const { setIsOpenModal } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaAddNetwork) });

  const onSubmitFunction = (data: FieldValues) => {
    setIsOpenModal(false);
  };

  return (
    <Modal setIsOpenModal={setIsOpenModal}>
      <Container>
        <h2>Adicionar rede</h2>
        <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            placeholder='Digite o nome da rede'
            name='name'
            register={register}
            label='Nome'
          />
          <ErrorMessage error={errors.name?.message} />
          <Input
            name='url'
            placeholder='Digite o endereço da rede'
            register={register}
            label='URL de contato'
          />
          <ErrorMessage error={errors.url?.message} />
          <section>
            <Button type='submit' color='yellow' width='170px'>
              Adicionar
            </Button>
          </section>
        </FormStyle>
      </Container>
    </Modal>
  );
};

export default ModalAddNetwork;
