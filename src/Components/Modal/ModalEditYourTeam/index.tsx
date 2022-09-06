import { useContext } from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from '..';
import { AuthContext } from '../../../Contexts/AuthContext';
import Input from '../../Input';
import Button from '../../Button';
import FormStyle from '../../Forms/style';
import { Container } from '../style';
import FieldSet from '../../Fieldset';
import { TeamsContext } from '../../../Contexts/TeamsContext';
import { schemaEditYourTeam } from '../../../Validations/validationEditYourTeam';

const ModalEditYourTeam = () => {
  const { setIsOpenModal } = useContext(AuthContext);
  const {} = useContext(TeamsContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schemaEditYourTeam) });

  const positionsArr = [
    { label: 'Goleiro', name: 'positionsSearchedFor', value: 'goalkeeper' },
    { label: 'Fixo', name: 'positionsSearchedFor', value: 'fixed' },
    { label: 'Pivô', name: 'positionsSearchedFor', value: 'target' },
    { label: 'Ala Esquerda', name: 'positionsSearchedFor', value: 'left wing' },
    { label: 'Ala Direita', name: 'positionsSearchedFor', value: 'right wing' },
  ];
  const editTeam = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Modal expandedModal setIsOpenModal={setIsOpenModal}>
      <Container>
        <h2>Editar Time</h2>
        <FormStyle onSubmit={handleSubmit(editTeam)}>
          <article>
            <section>
              <Input
                placeholder='Digite o nome do grupo'
                name='name'
                register={register}
                label='Nome do Grupo'
              />
              <span>
                {typeof errors.name?.message === 'string' &&
                  errors.name?.message}
              </span>
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
                height='150px'
              />
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
                <Input
                  name='state'
                  placeholder='Digite o estado'
                  register={register}
                  label='Estado'
                />
                <Input
                  name='city'
                  placeholder='Digite a cidade'
                  register={register}
                  label='Cidade'
                />
              </FieldSet>
              <span>
                {typeof errors.state?.message === 'string' &&
                  errors.state?.message}
              </span>
              <FieldSet
                type='checkbox'
                legend='Qual posição busca para o time?'
                register={register}
                checkboxArr={positionsArr}
              />
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

export default ModalEditYourTeam;
