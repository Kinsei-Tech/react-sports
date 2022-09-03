import Button from '../../Button';
import Input from '../../Input';
import FormStyle from '../style';

import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import Select from '../../Select';
import SelectCheckBoxStyled from '../../SelectCheckBox/style';
import Container from './style';
import { schema } from '../../../Validations/validationRegister';

import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';

export const FormRegister = () => {
  const { userRegister } = useContext(AuthContext);
  const onSubmitFunction = (data: FieldValues) => {
    userRegister(data);
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(schema) });

  return (
    <Container>
      <div className='form_Imagem'>
        <img src='./ImagemCadastroFinal.png' alt='' />
      </div>
      <div className='div_Header_Container_FormStyle'>
        <div className='div_Header_Form'></div>
        <div className='div_FormStyle'>
          <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Crie sua conta</h1>

            <div className='container_FlexInput'>
              <div className='div_InputWidth'>
                <div className='div_Container'>
                  <Input
                    placeholder='Digite seu nome'
                    register={register}
                    name='name'
                    label='Nome'
                  />

                  <h6>
                    {typeof errors.name?.message === 'string' &&
                      errors.name?.message}
                  </h6>
                </div>

                <div className='div_Container'>
                  <Input
                    type='text'
                    placeholder='Digite seu email'
                    register={register}
                    name='email'
                    label='Email'
                  />

                  <h6>
                    {typeof errors.email?.message === 'string' &&
                      errors.email?.message}
                  </h6>
                </div>

                <div className='div_Container'>
                  <Input
                    type='password'
                    placeholder='Digite sua senha'
                    register={register}
                    name='password'
                    label='Senha'
                  />

                  <h6>
                    {typeof errors.password?.message === 'string' &&
                      errors.password?.message}
                  </h6>
                </div>

                <div className='div_Container'>
                  <Input
                    type='password'
                    placeholder='Confirme sua senha'
                    register={register}
                    name='confirmPassword'
                    label='Confirme senha'
                  />

                  <h6>
                    {typeof errors.confirmPassword?.message === 'string' &&
                      errors.confirmPassword?.message}
                  </h6>
                </div>

                <div className='div_Container'>
                  <Input
                    type='text'
                    placeholder='Digite sua altura'
                    register={register}
                    name='height'
                    label='Altura'
                  />

                  <h6>
                    {typeof errors.height?.message === 'string' &&
                      errors.height?.message}
                  </h6>
                </div>

                <div className='div_Container'>
                  <Input
                    type='text'
                    placeholder='Digite seu peso'
                    register={register}
                    name='weight'
                    label='Peso'
                  />

                  <h6>
                    {typeof errors.weight?.message === 'string' &&
                      errors.weight?.message}
                  </h6>
                </div>

                <div className='div_Container'>
                  <Input
                    type='text'
                    placeholder='Digite sua Idade'
                    register={register}
                    name='age'
                    label='Idade'
                  />
                <h6>
                  {typeof errors.age?.message === 'string' &&
                    errors.age?.message}
                </h6>
                </div>
              </div>

              <div className='div_InputWidth'>
                <div className='div_Container'>
                  <Input
                    type='text'
                    placeholder='Digite seu CEP'
                    register={register}
                    name='cep'
                    label='CEP'
                  />
                  <h6>
                    {typeof errors.cep?.message === 'string' &&
                      errors.cep?.message}
                  </h6>
                </div>

                <div className='div_Container'>
                  <Select label='Estado'>
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
                  </Select>
                </div>

                <div className='div_Container'>
                  <Input
                    type='text'
                    placeholder='Digite sua cidade'
                    register={register}
                    name='city'
                    label='Cidade'
                  />

                  {!!errors && (
                    <h6>
                      {typeof errors.city?.message === 'string' &&
                        errors.city?.message}
                    </h6>
                  )}
                </div>

                <div className='div_Container'>
                  <Input
                    type='text'
                    placeholder='Digite seu telefone'
                    register={register}
                    name='telephone'
                    label={'Telefone'}
                  />

                  <h6>
                    {typeof errors.telephone?.message === 'string' &&
                      errors.telephone?.message}
                  </h6>
                </div>

                <SelectCheckBoxStyled>
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
                </SelectCheckBoxStyled>

                <div className='div_CheckBox_Width'>
                  <fieldset className='fieldPlayer'>
                    <legend>Qual posição busca jogar?</legend>

                    <div className='body_ContainerFieldSet'>
                      <div className='div_InfoFieldset'>
                        <input
                          type='checkbox'
                          value='goleiro'
                          {...register('positions')}
                        />
                        <label htmlFor='goleiro'>Goleiro</label>
                      </div>
                      <div className='div_InfoFieldset'>
                        <input
                          type='checkbox'
                          value='alaEsquerda'
                          {...register('positions')}
                        />
                        <label htmlFor='alaEsquerda'>Ala Esquerda</label>
                      </div>
                      <div className='div_InfoFieldset'>
                        <input
                          type='checkbox'
                          value='fixo'
                          {...register('positions')}
                        />
                        <label htmlFor='fixo'>Fixo</label>
                      </div>

                      <div className='div_InfoFieldset'>
                        <input
                          type='checkbox'
                          value='alaDireita'
                          {...register('positions')}
                        />
                        <label htmlFor='alaDireita'>Ala Direita</label>
                      </div>

                      <div className='div_InfoFieldset'>
                        <input
                          type='checkbox'
                          value='pivo'
                          {...register('positions')}
                        />
                        <label htmlFor='pivo'>Pivô</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
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
      </div>
    </Container>
  );
};
