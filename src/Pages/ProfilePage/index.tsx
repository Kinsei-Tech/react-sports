import { Header } from '../../Components/Header';
import { FaAngleDoubleRight, FaEnvelope } from 'react-icons/fa';
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
import ModalRequestList, {
  ITeam,
} from '../../Components/Modal/ModalRequestTeam';
import EditProfile from '../../Components/EditProfile';
import { EditProfileContext } from '../../Contexts/EditProfileContext';
import api from '../../services/api';
import { motion } from 'framer-motion';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { Navigate } from 'react-router-dom';

const ProfilePage = () => {
  const {
    isOpenModal,
    setIsOpenModal,
    user,
    setUserImg,
    userImg,
    userLocalStorage,
  } = useContext(AuthContext);
  const { getProfileInfo } = useContext(EditProfileContext);
  const [isModalAddNetwork, setIsModalAddNetwork] = useState(false);
  const [isModalEditProfile, setIsModalEditProfile] = useState(false);
  const [isModalTeamDetails, setIsModalTeamDetails] = useState(false);
  const [isModalRequestList, setIsModalRequestList] = useState(false);
  const [teams, setTeams] = useState([]);
  const [teams2, setTeams2] = useState<ITeam[]>([]);
  const { v4: uuidv4 } = require('uuid');

  useEffect(() => {
    setUserImg(localStorage.getItem('@userImg') || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const id = localStorage.getItem('@id');
    api.get(`/teams?userId=${id}`).then((response) => setTeams(response.data));
    gettTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    gettTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gettTeams = async () => {
    if (user?.id) {
      const { data } = await api.get<ITeam[]>(`teams?userId=${user.id}`);
      setTeams2(data);
    }
  };

  const openModalAddNetwork = () => {
    setIsModalEditProfile(false);
    setIsModalTeamDetails(false);
    setIsModalRequestList(false);

    setIsOpenModal(true);
    setIsModalAddNetwork(true);
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
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 0, transition: { duration: 0.3 } },
  };

  return userLocalStorage ? (
    <>
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={pageMotion}
      >
        {isModalEditProfile && isOpenModal && <EditProfile />}
        {isModalAddNetwork && isOpenModal && <ModalAddNetwork />}
        {isModalTeamDetails && isOpenModal && <ModalTeamDetails />}
        {isModalRequestList && isOpenModal && (
          <ModalRequestList teams2={teams2} key={uuidv4()} />
        )}
        <Header />
        <MainStyled>
          <SectionContactNetworks>
            <ContactsBox>
              <Contacts>
                <div className='img-user'>
                  <figure>
                    <img src={userImg} alt='Usuario' />
                  </figure>
                  <div className='box-notification'>
                    <FaEnvelope
                      className='svg-envelope-style'
                      onClick={openModalRequestList}
                    />
                    <span>
                      <AiFillExclamationCircle className='svg-exclamation-style' />
                    </span>
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
            </SectionUserAddress>
          </DivFlex>
          <SectionGroupList>
            <span className='section-title'>Grupos:</span>
            <UlTeamCard>
              {teams?.map((team) => (
                <Card elem={team} key={uuidv4()} type='profile' />
              ))}
            </UlTeamCard>
          </SectionGroupList>
        </MainStyled>
      </motion.div>
    </>
  ) : (
    <Navigate to='/login' replace />
  );
};

export default ProfilePage;
