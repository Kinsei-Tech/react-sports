import '../../Pages/Dashboard/style';
import { TeamCard } from './style';
import Button from '../../Components/Button';

function Card() {
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
        <Button color='green_black'>Detalhes</Button>
        <Button color='green_black'>Solicitar</Button>
      </div>
    </TeamCard>
  );
}

export default Card;
