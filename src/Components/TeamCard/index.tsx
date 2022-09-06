import '../../Pages/Dashboard/style';
import { TeamCard } from './style';
import Button from '../../Components/Button';
import { useState } from 'react';
import DropRequestDashboard from '../DropRequestDashboard';
interface IElementsProps {
  name: string;
  placeName: string;
  cep: string;
  state: string;
  city: string;
  maxWeight: number;
  maxAge: number;
  userId: number;
  description: string;
  id: number;
  positionsSearchedFor: [];
  requests: [];
  participantsId: [];
}

interface ICard {
  // openModalTeamDetails?: () => void;
  elem: IElementsProps;
}
function Card({ elem }: ICard) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TeamCard key={elem.id}>
      <img
        src='https://cdn-icons-png.flaticon.com/128/1177/1177568.png'
        alt='Logo do time'
      />

      <div>
        <h2>{elem.name}</h2>
        <p>{elem.description}</p>
      </div>

      <div className='infos'>
        <span>{elem.placeName}</span>
        <span>
          {/* {elem?.positionsSearchedFor?.reduce<string[]>((acc, proxima) =>
                  console.log(acc, proxima)
                )} */}
          {elem.positionsSearchedFor.join('/')}
        </span>
      </div>
      <div className='btnContainer'>
        <Button
          color='#000000'
          backGround='#93C335'
          // onClick={openModalTeamDetails}
        >
          Detalhes
        </Button>
        <Button
          onClick={() => setIsVisible(true)}
          color='#000000'
          backGround='#93C335'
        >
          Solicitar
        </Button>

        {isVisible && (
          <DropRequestDashboard
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        )}
      </div>
    </TeamCard>
  );
}

export default Card;
