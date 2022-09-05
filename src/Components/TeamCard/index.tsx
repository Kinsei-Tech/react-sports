import '../../Pages/Dashboard/style';
import { TeamCard } from './style';
import Button from '../../Components/Button';

interface ICard {
  openModalTeamDetails?: () => void;
}
function Card({ openModalTeamDetails }: ICard) {
  return (
    <TeamCard>
      <img
        src='https://cdn-icons-png.flaticon.com/128/1177/1177568.png'
        alt='Logo do time'
      />

      <div>
        <h2>Meia Boca</h2>
        <p>
          Busco pessoas para completar meu time de futsal aos sabados depois das
          17h
        </p>
      </div>

      <div className='infos'>
        <span>Local</span>
        <span>Contato</span>
        <span>Ala Esquerda/Pivô</span>
      </div>

      <div className='btnContainer'>
        <Button
          color='#000000'
          backGround='#93C335'
          onClick={openModalTeamDetails}
        >
          Detalhes
        </Button>
        <Button color='#000000' backGround='#93C335'>
          Solicitar
        </Button>
      </div>
    </TeamCard>
  );
}

export default Card;
