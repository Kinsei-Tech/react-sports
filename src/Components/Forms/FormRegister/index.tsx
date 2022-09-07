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
import FieldSet from '../../Fieldset';

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
    formState: { errors, isValid },
  } = useForm<FieldValues>({ mode: 'onChange', resolver: yupResolver(schema) });

  useEffect(() => {
    cep.length === 8 && getAddress(cep);
  }, [cep]);

  const positionsArr = [
    { label: 'Goleiro', name: 'positionsSearchedFor', value: 'goalkeeper' },
    { label: 'Fixo', name: 'positionsSearchedFor', value: 'fixed' },
    { label: 'Pivô', name: 'positionsSearchedFor', value: 'target' },
    { label: 'Ala Esquerda', name: 'positionsSearchedFor', value: 'left wing' },
    { label: 'Ala Direita', name: 'positionsSearchedFor', value: 'right wing' },
  ];

  return (
    <Container>
      <div className='form_Imagem'>
        <img src='./ImagemCadastroFinal.png' alt='' />
      </div>
      <div className='div_Header_Container_FormStyle'>
        <div className='div_Header_Form'></div>
        <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <article>
            <section>
              <Input
                placeholder='Digite seu nome'
                register={register}
                name='name'
                label='Nome'
              />
              <span className='errorMessage'>
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
              <span className='errorMessage'>
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
              <span className='errorMessage'>
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
              <span className='errorMessage'>
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
              <span className='errorMessage'>
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
              <span className='errorMessage'>
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
              <span className='errorMessage'>
                {typeof errors.age?.message === 'string' && errors.age?.message}
              </span>
            </section>
            <section>
              <Input
                type='number'
                placeholder='Digite seu CEP'
                register={register}
                name='cep'
                label='CEP'
                onChange={handleChange}
              />
              <span className='errorMessage'>
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
              <span className='errorMessage'>
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
                <span className='errorMessage'>
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
              <span className='errorMessage'>
                {typeof errors.telephone?.message === 'string' &&
                  errors.telephone?.message}
              </span>
              <FieldSet
                type='radio'
                legend='Pratica exercícios regularmente?'
                register={register}
              />
              <FieldSet
                type='checkbox'
                legend='Qual posição busca para o time?'
                register={register}
                checkboxArr={positionsArr}
              />
            </section>
          </article>
          {isValid ? (
            <Button color='yellow' type={'submit'}>
              Cadastrar
            </Button>
          ) : (
            <Button color='yellow-disabled' type={'submit'}>
              Cadastrar
            </Button>
          )}
        </FormStyle>
      </div>
    </Container>
  );
};
