import Button from '../../Button';
import Input from '../../Input';
import FormStyle from '../style';

import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import Select from '../../Select';
/* import SelectCheckBoxStyled from '../../SelectCheckBox/style';
 */ import Container from './style';
import { schema } from '../../../Validations/validationRegister';
import { BaseSyntheticEvent, useContext, useEffect } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';
import { AddressContext } from '../../../Contexts/AddressContext';

export const FormRegister = () => {
  const { userRegister } = useContext(AuthContext);
  const { getAddress, city, state, cep, setCep } = useContext(AddressContext);

  const handleChange = (event: BaseSyntheticEvent) => {
    setCep(event.target.value);
  };

  const onSubmitFunction = (data: FieldValues) => {
    userRegister(data);
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onChange', resolver: yupResolver(schema) });

  useEffect(() => {
    cep.length === 8 && getAddress(cep);
  }, [cep]);

  return (
    <Container>
      <div className='form_Imagem'>
        <img src='./ImagemCadastroFinal.png' alt='' />
      </div>
      <div className='div_Header_Container_FormStyle'>
        <div className='div_Header_Form'></div>
        <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Crie sua conta</h1>
          <div className='div_FormStyle'>
            <div className='sectionForm'>
              <Input
                placeholder='Digite seu nome'
                register={register}
                name='name'
                label='Nome'
              />
              <span>
                {typeof errors.name?.message === 'string' &&
                  errors.name?.message}
              </span>
              <Input
                placeholder='Cole aqui a URL da sua imagem'
                register={register}
                name='urlImg'
                label='Imagem Perfil'
              />
              <Input
                type='text'
                placeholder='Digite seu email'
                register={register}
                name='email'
                label='Email'
              />
              <span>
                {typeof errors.email?.message === 'string' &&
                  errors.email?.message}
              </span>
              <Input
                type='password'
                placeholder='Digite sua senha'
                register={register}
                name='password'
                label='Senha'
              />
              <span>
                {typeof errors.password?.message === 'string' &&
                  errors.password?.message}
              </span>
              <Input
                type='password'
                placeholder='Confirme sua senha'
                register={register}
                name='confirmPassword'
                label='Confirme senha'
              />
              <span>
                {typeof errors.confirmPassword?.message === 'string' &&
                  errors.confirmPassword?.message}
              </span>
              <Input
                type='number'
                placeholder='Digite sua altura'
                register={register}
                name='height'
                label='Altura(m)'
              />
              <span>
                {typeof errors.height?.message === 'string' &&
                  errors.height?.message}
              </span>
              <Input
                type='number'
                placeholder='Digite seu peso'
                register={register}
                name='weight'
                label='Peso(kg)'
              />
              <span>
                {typeof errors.weight?.message === 'string' &&
                  errors.weight?.message}
              </span>
              <Input
                type='number'
                placeholder='Digite sua Idade'
                register={register}
                name='age'
                label='Idade'
              />
              <span>
                {typeof errors.age?.message === 'string' && errors.age?.message}
              </span>
            </div>
            <div className='sectionForm'>
              <Input
                type='number'
                placeholder='Digite seu CEP'
                register={register}
                name='cep'
                label='CEP'
                onChange={handleChange}
              />
              <span>
                {typeof errors.cep?.message === 'string' && errors.cep?.message}
              </span>

              <Input
                type='text'
                placeholder='Digite seu estado'
                register={register}
                name='state'
                label='Estado'
                value={state}
              />
              <span>
                {typeof errors.state?.message === 'string' &&
                  errors.state?.message}
              </span>
              <Input
                type='text'
                placeholder='Digite sua cidade'
                register={register}
                name='city'
                label='Cidade'
                value={city}
              />
              {!!errors && (
                <span>
                  {typeof errors.city?.message === 'string' &&
                    errors.city?.message}
                </span>
              )}
              <Input
                type='number'
                placeholder='Digite seu telefone'
                register={register}
                name='telephone'
                label={'Telefone'}
              />
              <span>
                {typeof errors.telephone?.message === 'string' &&
                  errors.telephone?.message}
              </span>
              <fieldset>
                <legend>Pratica Exercícios ativamente?</legend>
                <label htmlFor='yes'>
                  Sim
                  <input
                    type='radio'
                    value='yes'
                    checked
                    {...register('isDoingSports')}
                  />
                </label>
                <label htmlFor='yes'>
                  Não
                  <input
                    type='radio'
                    value='no'
                    checked
                    {...register('isDoingSports')}
                  />
                </label>
              </fieldset>
              <fieldset className='fieldPlayer'>
                <legend>Qual posição busca jogar?</legend>
                <div className='checkDivision'>
                  <label htmlFor='goleiro'>
                    Goleiro
                    <input
                      type='checkbox'
                      value='goleiro'
                      {...register('positions')}
                    />
                  </label>
                  <label htmlFor='alaEsquerda'>
                    Ala Esquerda
                    <input
                      type='checkbox'
                      value='alaEsquerda'
                      {...register('positions')}
                    />
                  </label>
                  <label htmlFor='fixo'>
                    Fixo
                    <input
                      type='checkbox'
                      value='fixo'
                      {...register('positions')}
                    />
                  </label>
                </div>
                <div className='checkDivision'>
                  <label htmlFor='alaDireita'>
                    Ala Direita
                    <input
                      type='checkbox'
                      value='alaDireita'
                      {...register('positions')}
                    />
                  </label>

                  <label htmlFor='pivo'>
                    Pivô
                    <input
                      type='checkbox'
                      value='pivo'
                      {...register('positions')}
                    />
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <Button
            backGround={'var(--color-yellow-primary)'}
            colorHover={'var(--color-yellow-primary-hover)'}
            color={'var(--gray-2: #202020)'}
            type={'submit'}
          >
            Cadastrar
          </Button>
        </FormStyle>
      </div>
    </Container>
  );
};
