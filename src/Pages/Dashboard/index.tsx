import './style';
import { Main } from './style';
import Button from '../../Components/Button';
import Card from '../../Components/TeamCard';
import { Header } from '../../Components/Header';
import { SearchInput } from '../../Components/SearchInput';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import ModalCreateYourTeam from '../../Components/Modal/ModalCreateYourTeam';

import ModalEditYourTeam from '../../Components/Modal/ModalEditYourTeam';
import Footer from '../../Components/Footer';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';
import { TeamsContext } from '../../Contexts/TeamsContext';

export const Dashboard = () => {
  const {
    isOpenModal,
    setIsOpenModal,
    isModalCreateYourTeam,
    setIsModalCreateYourTeam,
    isModalEditYourTeam,
    setIsModalEditYourTeam,
    setIsModalRequest,
    userLocalStorage,
  } = useContext(AuthContext);

  const { teamDashBoard, getTeams } = useContext(TeamsContext);

  useEffect(() => {
    getTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openCreateYourTeam = () => {
    setIsModalEditYourTeam(false);
    setIsModalRequest(false);

    setIsOpenModal(true);
    setIsModalCreateYourTeam(true);
  };

  const pageMotion = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 0, transition: { duration: 0.3 } },
  };

  return userLocalStorage ? (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageMotion}
    >
      {isOpenModal && isModalCreateYourTeam && <ModalCreateYourTeam />}
      {isOpenModal && isModalEditYourTeam && <ModalEditYourTeam />}
      <Header />
      <Main>
        <div className='buttonsFilter'>
          <div className='btn'>
            <div className='hoverClass'>
              <Button
                className='createTeam'
                color='#000000'
                backGround='#93C335'
                onClick={openCreateYourTeam}
              >
                +
              </Button>
              <button className='onHoverInfo' onClick={openCreateYourTeam}>
                Criar um novo time
              </button>
            </div>

            <Button className='filter' color='#000000' backGround='#93C335'>
              Filtrar por...
            </Button>
          </div>

          <div className='searchArea'>
            <SearchInput />
          </div>
        </div>

        <div className='teamsCards'>
          <ul>
            {teamDashBoard?.map((elem) => (
              <Card elem={elem} key={uuid()}></Card>
            ))}
          </ul>
        </div>
      </Main>

      <Footer></Footer>
    </motion.div>
  ) : (
    <Navigate to='/login' replace />
  );
};

export default Dashboard;
