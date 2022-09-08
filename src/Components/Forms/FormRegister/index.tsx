import Button from '../../Button';
import Input from '../../Input';
import FormStyle from '../style';

import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
/* import SelectCheckBoxStyled from '../../SelectCheckBox/style';
 */ import Container from './style';
import { schema } from '../../../Validations/validationRegister';
import { BaseSyntheticEvent, useContext, useEffect } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';
import { AddressContext } from '../../../Contexts/AddressContext';
import FieldSet from '../../Fieldset';
import ErrorMessage from '../../InputErrorMessage';

export const FormRegister = () => {
  const { userRegister } = useContext(AuthContext);
  const { getAddress, city, state, cep, setCep } = useContext(AddressContext);

  const handleChange = (event: BaseSyntheticEvent) => {
    setCep(event.target.value);
  };

  const onSubmitFunction = (data: FieldValues) => {
    userRegister(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FieldValues>({ mode: 'onChange', resolver: yupResolver(schema) });

  useEffect(() => {
    cep.length === 8 && getAddress(cep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <ErrorMessage error={errors.name?.message} />
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
              <ErrorMessage error={errors.email?.message} />
              <Input
                type='password'
                placeholder='Digite sua senha'
                register={register}
                name='password'
                label='Senha'
              />
              <ErrorMessage error={errors.password?.message} />
              <Input
                type='password'
                placeholder='Confirme sua senha'
                register={register}
                name='confirmPassword'
                label='Confirme senha'
              />
              <ErrorMessage error={errors.confirmPassword?.message} />
              <Input
                type='number'
                placeholder='Digite sua altura'
                register={register}
                name='height'
                label='Altura(m)'
              />
              <Input
                type='number'
                placeholder='Digite seu peso'
                register={register}
                name='weight'
                label='Peso(kg)'
              />
              <Input
                type='number'
                placeholder='Digite sua Idade'
                register={register}
                name='age'
                label='Idade'
              />
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
              <ErrorMessage error={errors.cep?.message} />
              <Input
                type='text'
                placeholder='Digite seu estado'
                register={register}
                name='state'
                label='Estado'
                value={state}
              />
              <Input
                type='text'
                placeholder='Digite sua cidade'
                register={register}
                name='city'
                label='Cidade'
                value={city}
              />
              <Input
                type='number'
                placeholder='Digite seu telefone'
                register={register}
                name='telephone'
                label={'Telefone'}
              />
              <ErrorMessage error={errors.telephone?.message} />
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
