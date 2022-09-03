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

export const Dashboard = () => {
  const { isOpenModal, setIsOpenModal } = useContext(AuthContext);
  return (
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
  );
};

export default Dashboard;
