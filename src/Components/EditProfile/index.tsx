import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { schemaEditProfile } from '../../Validations/validationEditProfile';
import Button from '../Button';
import FormStyle from '../Forms/style';
import Input from '../Input';
import Modal from '../Modal';
import FooterModal from '../Modal/FooterModal';
import Teste from './style';

const EditProfile = () => {
  const [isOpenModall, setIsOpenModall] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaEditProfile) });

  const onSubmitFunctionEditProfile = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Teste>
      {isOpenModall && (
        <Modal setIsOpenModal={setIsOpenModall}>
          <FormStyle onSubmit={handleSubmit(onSubmitFunctionEditProfile)}>
            <h1>Editar Perfil</h1>
            <div className='teste'>
              <div className='sectionForm'>
                <Input
                  placeholder='Url Avatar'
                  label='URL Avatar'
                  name='url'
                  register={register}
                ></Input>
                <Input
                  placeholder='Telefone'
                  label='Telefone'
                  name='telefone'
                  register={register}
                ></Input>
                <Input
                  placeholder='Altura'
                  label='Altura'
                  name='altura'
                  register={register}
                ></Input>
                <Input
                  placeholder='Peso'
                  label='Peso'
                  name='peso'
                  register={register}
                ></Input>
                <Input
                  placeholder='Idade'
                  label='Idade'
                  name='idade'
                  register={register}
                ></Input>
              </div>
              <div className='sectionForm'>
                <Input
                  placeholder='Cep'
                  label='Cep'
                  name='cep'
                  register={register}
                ></Input>
                {/*                 <span>
                  {typeof errors.Cep?.message === 'string' &&
                    errors.password?.Cep}
                </span> */}
                <Input
                  placeholder='Estado'
                  label='Estado'
                  name='estado'
                  register={register}
                ></Input>
                <Input
                  placeholder='Cidade'
                  label='Cidade'
                  name='cidade'
                  register={register}
                ></Input>

                <fieldset>
                  <legend>Pratica Exercícios ativamente?</legend>

                  <Input
                    type='radio'
                    value='yes'
                    name='isDoingSports'
                    register={register}
                    label='Sim'
                    height={'auto'}
                  />
                  <Input
                    type='radio'
                    value='no'
                    name='isDoingSports'
                    register={register}
                    label='Não'
                    height={'auto'}
                  />
                </fieldset>
                <fieldset>
                  <legend>Qual posição busca jogar?</legend>
                  <div className='checkDivision'>
                    <Input
                      type='checkbox'
                      value='goleiro'
                      name='positions'
                      register={register}
                      label='Goleiro'
                    />
                    <Input
                      type='checkbox'
                      value='Fixo'
                      name='positions'
                      label='Fixo'
                      register={register}
                    />
                    <Input
                      type='checkbox'
                      value='Pivô'
                      name='positions'
                      label='Pivô'
                      register={register}
                    />
                  </div>
                  <div className='checkDivision'>
                    <Input
                      type='checkbox'
                      value='Ala Esquerda'
                      name='positions'
                      label='ala Esquerda'
                      register={register}
                    />
                    <Input
                      type='checkbox'
                      value='Ala Direita'
                      name='positions'
                      label='Ala Direita'
                      register={register}
                    />
                  </div>
                </fieldset>
              </div>
            </div>
            <Button
              width={'90%'}
              height={'50px'}
              backGround='var(--color-yellow-primary)'
              colorHover='var(--color-yellow-primary-hover)'
              color='var(--gray-2)'
            >
              Editar
            </Button>
          </FormStyle>
          <FooterModal></FooterModal>
        </Modal>
      )}
    </Teste>
  );
};

export default EditProfile;
