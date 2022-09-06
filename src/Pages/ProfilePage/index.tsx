import { Header } from '../../Components/Header';
import { FaAngleDoubleRight, FaEnvelope } from 'react-icons/fa';
import ImgProfile from '../../Images/ImagemPerfil.svg';
import {
  ButtonBox,
  Contacts,
  ContactsBox,
  DivFlex,
  DivNetworks,
  MainStyled,
  PhysicalDescriptions,
  Pipe,
  SectionContactNetworks,
  SectionGroupList,
  SectionUserAddress,
  SectionUserDescription,
  UlTeamCard,
} from './style';
import Button from '../../Components/Button';
import Card from '../../Components/TeamCard';
import ModalAddNetwork from '../../Components/Modal/ModalAddNetwork';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import ModalTeamDetails from '../../Components/Modal/ModalTeamDetails';
import ModalRequestList from '../../Components/Modal/ModalRequestList';

const ProfilePage = () => {
  const { isOpenModal, setIsOpenModal, user } = useContext(AuthContext);
  const [isModalAddNetwork, setIsModalAddNetwork] = useState(false);
  const [isModalEditProfile, setIsModalEditProfile] = useState(false);
  const [isModalTeamDetails, setIsModalTeamDetails] = useState(false);
  const [isModalRequestList, setIsModalRequestList] = useState(false);

  const {
    name,
    telephone,
    email,
    height,
    weight,
    age,
    isDoingSports,
    positions,
    state,
    cep,
    city,
  } = user;

  const openModalAddNetwork = () => {
    setIsModalEditProfile(false);
    setIsModalTeamDetails(false);
    setIsModalRequestList(false);

    setIsOpenModal(true);
    setIsModalAddNetwork(true);
  };

  const openModalTeamDetails = () => {
    setIsModalEditProfile(false);
    setIsModalAddNetwork(false);
    setIsModalRequestList(false);

    setIsOpenModal(true);
    setIsModalTeamDetails(true);
  };

  const openModalRequestList = () => {
    setIsModalRequestList(false);
    setIsModalEditProfile(false);
    setIsModalAddNetwork(false);

    setIsOpenModal(true);
    setIsModalRequestList(true);
  };

  return (
    <>
      <Header />
      {isModalAddNetwork && isOpenModal && <ModalAddNetwork />}
      {isModalEditProfile && isOpenModal /*ModalEditProfile*/}
      {isModalTeamDetails && isOpenModal && <ModalTeamDetails />}
      {isModalRequestList && isOpenModal && <ModalRequestList />}
      <MainStyled>
        <SectionContactNetworks>
          <ContactsBox>
            <Contacts>
              <div className='img-user'>
                <figure>
                  <img src={ImgProfile} alt='Usuario' />
                </figure>
                <div className='box-notification'>
                  <FaEnvelope
                    className='svg-envelope-style'
                    onClick={openModalRequestList}
                  />
                  <span>2</span>
                </div>
              </div>
              <div className='user-contacts'>
                <span className='user-name'>{name}</span>
                <span>{email}</span>
                <span>{telephone}</span>
              </div>
            </Contacts>
          </ContactsBox>
          <DivNetworks>
            <h3>Redes:</h3>
            <div>
              <a href='#'>
                <span>Facebook</span>
                <FaAngleDoubleRight className='svg-doublerigth-style' />
              </a>
              <a href='#'>
                <span>Facebook</span>
                <FaAngleDoubleRight className='svg-doublerigth-style' />
              </a>
              <a href='#'>
                <span>Facebook</span>
                <FaAngleDoubleRight className='svg-doublerigth-style' />
              </a>
              <a href='#'>
                <span>Facebook</span>
                <FaAngleDoubleRight className='svg-doublerigth-style' />
              </a>
            </div>
          </DivNetworks>
          <ButtonBox>
            <Button
              color='var(--gray-2)'
              backGround='var(--color-green-primary)'
              height={'21px'}
              width={'84px'}
              colorHover='var(--color-green-primary-hover)'
            >
              Editar Perfil
            </Button>
            <Button
              color='var(--gray-2)'
              backGround='var(--color-green-primary)'
              height={'21px'}
              width={'84px'}
              colorHover='var(--color-green-primary-hover)'
              onClick={openModalAddNetwork}
            >
              Add Redes
            </Button>
          </ButtonBox>
        </SectionContactNetworks>
        <DivFlex>
          <SectionUserDescription>
            <PhysicalDescriptions>
              <p>
                Altura:
                {height ? <span>{height}</span> : <span>__</span>}
              </p>
              <Pipe>|</Pipe>
              <p>
                Peso:
                {weight ? <span>{weight}</span> : <span>__</span>}
              </p>
              <Pipe>|</Pipe>
              <p>
                Idade:
                {age ? <span>{age}</span> : <span>__</span>}
              </p>
            </PhysicalDescriptions>
            {isDoingSports ? (
              isDoingSports === 'yes' ? (
                <p>Pratica esportes regularmente</p>
              ) : (
                <p>Não pratica esportes regularmente</p>
              )
            ) : (
              <p>___</p>
            )}

            {positions.length > 0 ? (
              positions.length === 1 ? (
                <p>
                  Posição:
                  <span>{positions[0]}</span>
                </p>
              ) : (
                <p>
                  Posições:
                  {positions.map((position) => (
                    <span> {position} /</span>
                  ))}
                </p>
              )
            ) : (
              <p>
                Posições:
                <span>___</span>
              </p>
            )}
          </SectionUserDescription>
          <SectionUserAddress>
            <p>
              Estado:
              <span>{state}</span>
            </p>
            <p>
              CEP:
              <span>{cep}</span>
            </p>
            <p>
              Cidade:
              <span>{city}</span>
            </p>
            <p>
              Bairro:
              <span>Pajuçara</span>
            </p>
          </SectionUserAddress>
        </DivFlex>
        <SectionGroupList>
          <span className='section-title'>Grupos:</span>
          <UlTeamCard>
            <Card openModalTeamDetails={openModalTeamDetails} />
            <Card openModalTeamDetails={openModalTeamDetails} />
          </UlTeamCard>
        </SectionGroupList>
      </MainStyled>
    </>
  );
};

export default ProfilePage;
