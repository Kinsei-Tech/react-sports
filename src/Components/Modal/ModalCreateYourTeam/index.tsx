import { useContext } from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from '..';
import { AuthContext } from '../../../Contexts/AuthContext';
import Input from '../../Input';
import Button from '../../Button';
import FormStyle from '../../Forms/style';
import { Container } from '../style';
import FieldSet from '../../Fieldset';
import { TeamsContext } from '../../../Contexts/TeamsContext';
import { schemaCreateYourTeam } from '../../../Validations/validationCreateYourTeam';
import ErrorMessage from '../../InputErrorMessage';

const ModalCreateYourTeam = () => {
  const { setIsOpenModal } = useContext(AuthContext);
  const { createTeam } = useContext(TeamsContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaCreateYourTeam),
  });

  const positionsArr = [
    { label: 'Goleiro', name: 'positionsSearchedFor', value: 'goalkeeper' },
    { label: 'Fixo', name: 'positionsSearchedFor', value: 'fixed' },
    { label: 'Pivô', name: 'positionsSearchedFor', value: 'target' },
    { label: 'Ala Esquerda', name: 'positionsSearchedFor', value: 'left wing' },
    { label: 'Ala Direita', name: 'positionsSearchedFor', value: 'right wing' },
  ];
  const newTeam = (data: FieldValues) => {
    createTeam(data);
  };
  return (
    <Modal expandedModal setIsOpenModal={setIsOpenModal}>
      <Container>
        <h2>Forme seu Time</h2>
        <FormStyle onSubmit={handleSubmit(newTeam)}>
          <article>
            <section>
              <Input
                placeholder='Digite o nome do grupo'
                name='name'
                register={register}
                label='Nome do Grupo'
              />
              <ErrorMessage error={errors.name?.message} />

              <Input
                name='placeName'
                placeholder='Digite o nome do local'
                register={register}
                label='Local'
              />
              <ErrorMessage error={errors.placeName?.message} />
              <Input
                name='maxWeight'
                placeholder='Digite o peso máximo'
                type='number'
                register={register}
                label='Peso'
              />
              <ErrorMessage error={errors.maxWeight?.message} />
              <Input
                name='maxAge'
                placeholder='Digite a idade máxima'
                type='number'
                register={register}
                label='Idade'
              />
              <ErrorMessage error={errors.maxAge?.message} />
              <Input
                name='description'
                placeholder='O que procura?'
                register={register}
                label='Descrição'
                height='150px'
              />
              <ErrorMessage error={errors.description?.message} />
            </section>
            <section>
              <FieldSet
                type='textInput'
                legend='Endereço do local'
                register={register}
              >
                <Input
                  name='cep'
                  placeholder='Digite o CEP'
                  register={register}
                  label='CEP'
                />
                <ErrorMessage error={errors.cep?.message} />
                <Input
                  name='state'
                  placeholder='Digite o estado'
                  register={register}
                  label='Estado'
                />
                <ErrorMessage error={errors.state?.message} />
                <Input
                  name='city'
                  placeholder='Digite a cidade'
                  register={register}
                  label='Cidade'
                />
                <ErrorMessage error={errors.city?.message} />
              </FieldSet>
              <FieldSet
                type='checkbox'
                legend='Qual posição busca para o time?'
                register={register}
                checkboxArr={positionsArr}
              />
              <ErrorMessage error={errors.positionsSeachedfor?.message} />
            </section>
          </article>
          <Button color='yellow' width='75%' disabled={!isValid}>
            Criar
          </Button>
        </FormStyle>
      </Container>
    </Modal>
  );
};

export default ModalCreateYourTeam;
