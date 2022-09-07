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
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import ModalTeamDetails from '../../Components/Modal/ModalTeamDetails';
import ModalRequestList from '../../Components/Modal/ModalRequestList';
import EditProfile from '../../Components/EditProfile';
import { EditProfileContext } from '../../Contexts/EditProfileContext';
import api from '../../services/api';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const { isOpenModal, setIsOpenModal, user } = useContext(AuthContext);
  const { getProfileInfo } = useContext(EditProfileContext);

  const [isModalAddNetwork, setIsModalAddNetwork] = useState(false);
  const [isModalEditProfile, setIsModalEditProfile] = useState(false);
  const [isModalTeamDetails, setIsModalTeamDetails] = useState(false);
  const [isModalRequestList, setIsModalRequestList] = useState(false);
  const [teams, setTeams] = useState([]);
  /*   const userId = localStorage.getItem('@id'); */
  const { v4: uuidv4 } = require('uuid');


  useEffect(() => {
    user &&
      api
        .get(`/teams?userId=${user.id}`)
        .then((response) => setTeams(response.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(teams);

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
    setIsModalEditProfile(false);
    setIsModalAddNetwork(false);
    setIsModalTeamDetails(false);

    setIsOpenModal(true);
    setIsModalRequestList(true);
  };

  const openModalEditProfile = () => {
    getProfileInfo();

    setIsModalRequestList(false);
    setIsModalTeamDetails(false);
    setIsModalAddNetwork(false);

    setIsOpenModal(true);
    setIsModalEditProfile(true);
  };

  const pageMotion = {
    initial: {opacity: 0, x: -50},
    animate: {opacity: 1, x: 0, transition: {duration: 0.3}},
    exit: {opacity: 0, x:0, transition: {duration: 0.3}}
  };

  return (
    <>

      <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion}>
        {isModalEditProfile && isOpenModal && <EditProfile />}
        {isModalAddNetwork && isOpenModal && <ModalAddNetwork />}
        {isModalTeamDetails && isOpenModal && <ModalTeamDetails />}
        {isModalRequestList && isOpenModal && <ModalRequestList />}
        <Header />

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
                <span className='user-name'>{user?.name}</span>
                <span>{user?.email}</span>
                <span>{user?.telephone}</span>
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
              onClick={openModalEditProfile}
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
                {user?.height ? <span>{user?.height}</span> : <span>__</span>}
              </p>
              <Pipe>|</Pipe>
              <p>
                Peso:
                {user?.weight ? <span>{user?.weight}</span> : <span>__</span>}
              </p>
              <Pipe>|</Pipe>
              <p>
                Idade:
                {user?.age ? <span>{user?.age}</span> : <span>__</span>}
              </p>
            </PhysicalDescriptions>
            {user?.isExercising ? (
              user?.isExercising === 'yes' ? (
                <p>Pratica esportes regularmente</p>
              ) : (
                <p>Não pratica esportes regularmente</p>
              )
            ) : (
              <p>___</p>
            )}

            {user && user.positions?.length > 0 ? (
              user && user.positions.length === 1 ? (
                <p>
                  Posição:
                  <span>{user?.positions[0]}</span>
                </p>
              ) : (
                <p>
                  Posições:
                  {user?.positions.map((position) => (
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
              <span>{user?.state}</span>
            </p>
            <p>
              CEP:
              <span>{user?.cep}</span>
            </p>
            <p>
              Cidade:
              <span>{user?.city}</span>
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
            {teams?.map((team) => (
              <Card elem={team} key={uuidv4()} type='profile'></Card>
            ))}
          </UlTeamCard>
        </SectionGroupList>
      </MainStyled>
      </motion.div>
    </>
    );
};

export default ProfilePage;
