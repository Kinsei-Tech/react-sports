import './style';
import { Main } from './style';
import Button from '../../Components/Button';
import Card from '../../Components/TeamCard';
import { Header } from '../../Components/Header';
import { SearchInput } from '../../Components/SearchInput';

import ModalAddNetwork from '../../Components/Modals/ModalAddNetwork';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import ModalCreateYourTeam from '../../Components/Modals/ModalCreateYourTeam';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router-dom';


export const Dashboard = () => {
  const { isOpenModal, setIsOpenModal, user  } = useContext(AuthContext);
  return user ? (
    <>
      {isOpenModal && <ModalCreateYourTeam />}
      <Header />
      <Main>
        <div className='buttonsFilter'>
          <div>
            <Button
              onClick={() => setIsOpenModal(true)}
              className='createTeam'
              color='green_black'
            >
              +
            </Button>
            <Button className='filter' color='green_black'>

              Filtrar por...
            </Button>
          </div>

          <div className='searchArea'>
            <SearchInput />
          </div>
        </div>

        <div className='teamsCards'>
          <ul>
            <Card></Card>
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
