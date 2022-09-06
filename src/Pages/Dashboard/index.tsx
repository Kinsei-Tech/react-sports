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

export const Dashboard = () => {
  const { v4: uuidv4 } = require('uuid');
  const { user, isOpenModal, setIsOpenModal } = useContext(AuthContext);

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
  return user ? (
    <>
      <Header />
      {isOpenModal && <ModalCreateYourTeam />}
      <Main>
        <div className='buttonsFilter'>
          <div>
            <Button
              className='createTeam'
              color='#000000'
              backGround='#93C335'
              onClick={() => setIsOpenModal(true)}
            >
              +
            </Button>
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

      <footer></footer>
    </>
  ) : (
    <Navigate to='/login' replace />
  );
};

export default Dashboard;
