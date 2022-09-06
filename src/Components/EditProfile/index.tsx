import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { schemaEditProfile } from '../../Validations/validationEditProfile';
import Button from '../Button';
import FormStyle from '../Forms/style';
import Input from '../Input';
import Modal from '../Modal';
import FooterModal from '../Modal/FooterModal';
import Container from './style';

const EditProfile = () => {
  const [isOpenModall, setIsOpenModall] = useState<boolean>(true);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaEditProfile),
  });

  const onSubmitFunctionEditProfile = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      {isOpenModall && (
        <Modal setIsOpenModal={setIsOpenModall}>
          <FormStyle onSubmit={handleSubmit(onSubmitFunctionEditProfile)}>
            <h1>Editar Perfil</h1>
            <div className='teste'>
              <div className='sectionForm'>
                <Input
                  placeholder='Url Avatar'
                  label='URL Avatar'
                  name='urlImg'
                  register={register}
                ></Input>
                <span>
                  {typeof errors.urlImg?.message === 'string' &&
                    errors.urlImg?.message}
                </span>
                <Input
                  placeholder='Nome'
                  label='Nome'
                  name='name'
                  register={register}
                ></Input>
                <span>
                  {typeof errors.name?.message === 'string' &&
                    errors.name?.message}
                </span>
                <Input
                  placeholder='Email'
                  label='Email'
                  name='email'
                  register={register}
                ></Input>
                <span>
                  {typeof errors.email?.message === 'string' &&
                    errors.email?.message}
                </span>
                <Input
                  placeholder='Telefone'
                  label='Telefone'
                  name='telephone'
                  register={register}
                ></Input>
                <span>
                  {typeof errors.telephone?.message === 'string' &&
                    errors.telephone?.message}
                </span>
                <Input
                  placeholder='Altura'
                  label='Altura'
                  name='height'
                  register={register}
                ></Input>
                <span>
                  {typeof errors.height?.message === 'string' &&
                    errors.height?.message}
                </span>
                <Input
                  placeholder='Peso'
                  label='Peso'
                  name='weight'
                  register={register}
                ></Input>
                <span>
                  {typeof errors.weight?.message === 'string' &&
                    errors.weight?.message}
                </span>
                <Input
                  placeholder='Idade'
                  label='Idade'
                  name='age'
                  register={register}
                ></Input>
                <span>
                  {typeof errors.age?.message === 'string' &&
                    errors.age?.message}
                </span>
              </div>
              <div className='sectionForm'>
                <Input
                  placeholder='Cep'
                  label='Cep'
                  name='cep'
                  register={register}
                ></Input>
                <span>
                  {typeof errors.cep?.message === 'string' &&
                    errors.cep?.message}
                </span>
                <label>
                  <span>Estado</span>
                  <select
                    {...register('state')}
                    onChange={(e) =>
                      setValue('state', e.target.value, {
                        shouldValidate: true,
                      })
                    }
                  >
                    <option value='AC'>Acre</option>
                    <option value='AL'>Alagoas</option>
                    <option value='AP'>Amapá</option>
                    <option value='AM'>Amazonas</option>
                    <option value='BA'>Bahia</option>
                    <option value='CE'>Ceará</option>
                    <option value='DF'>Distrito Federal</option>
                    <option value='ES'>Espírito Santo</option>
                    <option value='GO'>Goiás</option>
                    <option value='MA'>Maranhão</option>
                    <option value='MT'>Mato Grosso</option>
                    <option value='MS'>Mato Grosso do Sul</option>
                    <option value='MG'>Minas Gerais</option>
                    <option value='PA'>Pará</option>
                    <option value='PB'>Paraíba</option>
                    <option value='PR'>Paraná</option>
                    <option value='PE'>Pernambuco</option>
                    <option value='PI'>Piauí</option>
                    <option value='RJ'>Rio de Janeiro</option>
                    <option value='RN'>Rio Grande do Norte</option>
                    <option value='RS'>Rio Grande do Sul</option>
                    <option value='RO'>Rondônia</option>
                    <option value='RR'>Roraima</option>
                    <option value='SC'>Santa Catarina</option>
                    <option value='SP'>São Paulo</option>
                    <option value='SE'>Sergipe</option>
                    <option value='TO'>Tocantins</option>
                    <option value='EX'>Estrangeiro</option>
                  </select>
                </label>

                <span>
                  {typeof errors.state?.message === 'string' &&
                    errors.state?.message}
                </span>
                <Input
                  placeholder='Cidade'
                  label='Cidade'
                  name='city'
                  register={register}
                ></Input>
                <span>
                  {typeof errors.city?.message === 'string' &&
                    errors.city?.message}
                </span>
                <fieldset>
                  <legend>Pratica Exercícios ativamente?</legend>

                  <Input
                    type='radio'
                    value='Sim'
                    name='isExercising'
                    register={register}
                    label='Sim'
                    height={'auto'}
                  />
                  <Input
                    type='radio'
                    value='Não'
                    name='isExercising'
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
    </Container>
  );
};

export default EditProfile;
