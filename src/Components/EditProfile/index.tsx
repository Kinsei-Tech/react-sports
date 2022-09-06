import { yupResolver } from '@hookform/resolvers/yup';
import { BaseSyntheticEvent, useContext, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { AddressContext } from '../../Contexts/AddressContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { EditProfileContext } from '../../Contexts/EditProfileContext';
import { schemaEditProfile } from '../../Validations/validationEditProfile';
import Button from '../Button';
import FormStyle from '../Forms/style';
import Input from '../Input';
import ErrorMessage from '../InputErrorMessage';
import Modal from '../Modal';
import FooterModal from '../Modal/FooterModal';
import Container from './style';

const EditProfile = () => {
  const { setIsOpenModal } = useContext(AuthContext);
  const { state, city, cep, setCep, getAddress } = useContext(AddressContext);
  const {
    urlImg,
    setUrlImg,
    name,
    setName,
    email,
    setEmail,
    telephone,
    setTelephone,
    height,
    setHeight,
    weight,
    setWeight,
    age,
    setAge,
    editProfile,
  } = useContext(EditProfileContext);
  const handleChange = (event: BaseSyntheticEvent) => {
    setCep(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaEditProfile),
  });

  const onSubmitFunction = (data: FieldValues) => {
    editProfile(data);
  };

  useEffect(() => {
    cep.length >= 8 && getAddress(cep);
  }, [cep]);

  return (
    <Container>
      <Modal setIsOpenModal={setIsOpenModal}>
        <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Editar Perfil</h1>
          <div className='teste'>
            <div className='sectionForm'>
              <Input
                placeholder='Cole aqui a url da sua foto'
                label='URL Avatar'
                name='urlImg'
                value={urlImg}
                onChange={(event) => setUrlImg(event.target.value)}
                register={register}
              ></Input>
              <ErrorMessage error={errors.urlImg?.message} />
              <Input
                placeholder='Digite seu nome'
                label='Nome'
                name='name'
                value={name}
                onChange={(event) => setName(event.target.value)}
                register={register}
              ></Input>
              <ErrorMessage error={errors.name?.message} />
              <Input
                placeholder='Digite seu email'
                label='Email'
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                register={register}
              ></Input>
              <ErrorMessage error={errors.email?.message} />
              <Input
                placeholder='Digite seu telefone'
                label='Telefone'
                name='telephone'
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
                register={register}
                type='number'
              ></Input>
              <ErrorMessage error={errors.telephone?.message} />
              <Input
                placeholder='Digite sua altura'
                label='Altura(m)'
                name='height'
                register={register}
                type='number'
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              ></Input>
              <ErrorMessage error={errors.height?.message} />
              <Input
                placeholder='Digite seu peso'
                label='Peso(kg)'
                name='weight'
                register={register}
                type='number'
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              ></Input>
              <ErrorMessage error={errors.weight?.message} />
              <Input
                placeholder='Digite sua idade'
                label='Idade'
                name='age'
                register={register}
                type='number'
                value={age}
                onChange={(event) => setAge(event.target.value)}
              ></Input>
              <ErrorMessage error={errors.age?.message} />
            </div>
            <div className='sectionForm'>
              <Input
                placeholder='Digite seu cep'
                label='CEP'
                value={cep}
                name='cep'
                onChange={handleChange}
                register={register}
              ></Input>
              <ErrorMessage error={errors.cep?.message} />
              <Input
                placeholder='Digite seu estado'
                label='Estado'
                name='state'
                register={register}
                value={state}
              />
              <ErrorMessage error={errors.state?.message} />
              <Input
                placeholder='Digite a sua cidade'
                label='Cidade'
                name='city'
                register={register}
                value={city}
              ></Input>
              <ErrorMessage error={errors.city?.message} />
              <fieldset>
                <legend>Pratica Exercícios ativamente?</legend>

                <Input
                  type='radio'
                  value='yes'
                  name='isExercising'
                  register={register}
                  label='Sim'
                  height={'auto'}
                />
                <Input
                  type='radio'
                  value='no'
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
                    value='goalkeeper'
                    name='positions'
                    register={register}
                    label='Goleiro'
                  />
                  <Input
                    type='checkbox'
                    value='fixed'
                    name='positions'
                    label='Fixo'
                    register={register}
                  />
                  <Input
                    type='checkbox'
                    value='target'
                    name='positions'
                    label='Pivô'
                    register={register}
                  />
                </div>
                <div className='checkDivision'>
                  <Input
                    type='checkbox'
                    value='left wing'
                    name='positions'
                    label='Ala esquerda'
                    register={register}
                  />
                  <Input
                    type='checkbox'
                    value='right wing'
                    name='positions'
                    label='Ala direita'
                    register={register}
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <Button width={'90%'} height={'50px'} color='yellow' type='submit'>
            Editar
          </Button>
        </FormStyle>
        <FooterModal></FooterModal>
      </Modal>
    </Container>
  );
};

export default EditProfile;
