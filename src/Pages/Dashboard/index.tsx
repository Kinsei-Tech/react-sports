import './style';
import { Main } from './style';
import Button from '../../Components/Button';
import Card from '../../Components/TeamCard';
import { Header } from '../../Components/Header';
import { SearchInput } from '../../Components/SearchInput';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import ModalCreateYourTeam from '../../Components/Modal/ModalCreateYourTeam';
import api from '../../services/api';
import ModalEditYourTeam from '../../Components/Modal/ModalEditYourTeam';
import Footer from '../../Components/Footer';

export const Dashboard = () => {
  const { v4: uuidv4 } = require('uuid');
  const {
    user,
    isOpenModal,
    setIsOpenModal,
    isModalCreateYourTeam,
    setIsModalCreateYourTeam,
    isModalEditYourTeam,
    setIsModalEditYourTeam,
    isModalRequest,
    setIsModalRequest,
  } = useContext(AuthContext);

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // const getTeams = () => {
    api
      .get('/teams')
      .then((response) => {
        setTeams(response.data);
      })
      .catch((err) => console.log(err));
    // };
  }, []);

  const openCreateYourTeam = () => {
    setIsModalEditYourTeam(false);
    setIsModalRequest(false);

    setIsOpenModal(true);
    setIsModalCreateYourTeam(true);
  };
  return user ? (
    <>
      <Header />
      {isOpenModal && isModalCreateYourTeam && <ModalCreateYourTeam />}
      {isOpenModal && isModalEditYourTeam && <ModalEditYourTeam />}

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
            {teams?.map((elem, index) => (
              <Card elem={elem} key={uuidv4()}></Card>
            ))}
          </ul>
        </div>
      </Main>

      <Footer></Footer>
    </>
  ) : (
    <Navigate to='/login' replace />
  );
};

export default Dashboard;
