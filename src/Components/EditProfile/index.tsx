import { yupResolver } from '@hookform/resolvers/yup';
import { BaseSyntheticEvent, useContext, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { AddressContext } from '../../Contexts/AddressContext';
import { AuthContext } from '../../Contexts/AuthContext';
import { EditProfileContext } from '../../Contexts/EditProfileContext';
import { schemaEditProfile } from '../../Validations/validationEditProfile';
import Button from '../Button';
import FieldSet from '../Fieldset';
import FormStyle from '../Forms/style';
import Input from '../Input';
import ErrorMessage from '../InputErrorMessage';
import Modal from '../Modal';
import { ContainerEdit } from './style';

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

  const positionsArr = [
    { label: 'Goleiro', name: 'positionsSearchedFor', value: 'goalkeeper' },
    { label: 'Fixo', name: 'positionsSearchedFor', value: 'fixed' },
    { label: 'Pivô', name: 'positionsSearchedFor', value: 'target' },
    { label: 'Ala Esquerda', name: 'positionsSearchedFor', value: 'left wing' },
    { label: 'Ala Direita', name: 'positionsSearchedFor', value: 'right wing' },
  ];

  return (
    <Modal expandedModal setIsOpenModal={setIsOpenModal}>
      <ContainerEdit>
        <h2>Editar Perfil</h2>
        <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
          <article>
            <section>
              <Input
                placeholder='Cole aqui a url da sua foto'
                label='URL Avatar'
                name='urlImg'
                value={urlImg}
                onChange={(event) => setUrlImg(event.target.value)}
                register={register}
              />
              <ErrorMessage error={errors.urlImg?.message} />
              <Input
                placeholder='Digite seu nome'
                label='Nome'
                name='name'
                value={name}
                onChange={(event) => setName(event.target.value)}
                register={register}
              />
              <ErrorMessage error={errors.name?.message} />
              <Input
                placeholder='Digite seu email'
                label='Email'
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                register={register}
              />
              <ErrorMessage error={errors.email?.message} />
              <Input
                placeholder='Digite seu telefone'
                label='Telefone'
                name='telephone'
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
                register={register}
                type='number'
              />
              <ErrorMessage error={errors.telephone?.message} />
              <Input
                placeholder='Digite sua altura'
                label='Altura(m)'
                name='height'
                register={register}
                type='number'
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
              <ErrorMessage error={errors.height?.message} />
              <Input
                placeholder='Digite seu peso'
                label='Peso(kg)'
                name='weight'
                register={register}
                type='number'
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
              <ErrorMessage error={errors.weight?.message} />
              <Input
                placeholder='Digite sua idade'
                label='Idade'
                name='age'
                register={register}
                type='number'
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
              <ErrorMessage error={errors.age?.message} />
            </section>
            <section>
              <Input
                placeholder='Digite seu cep'
                label='CEP'
                value={cep}
                name='cep'
                onChange={handleChange}
                register={register}
              />
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
              />
              <ErrorMessage error={errors.city?.message} />
              <FieldSet
                type='radio'
                legend='Pratica exercícios ativamente?'
                register={register}
              />
              <FieldSet
                type='checkbox'
                legend='Qual posição busca para o time?'
                register={register}
                checkboxArr={positionsArr}
              />
              <ErrorMessage error={errors.positions?.message} />
            </section>
          </article>
          <Button width={'90%'} height={'50px'} color='yellow' type='submit'>
            Editar
          </Button>
        </FormStyle>
      </ContainerEdit>
    </Modal>
  );
};

export default EditProfile;
