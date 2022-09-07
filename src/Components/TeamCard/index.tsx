import '../../Pages/Dashboard/style';
import { SectionImagem, TeamCard } from './style';
import Button from '../../Components/Button';
import { useContext, useState } from 'react';
import DropRequestDashboard from '../DropRequestDashboard';
import { FaEnvelope } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthContext';

export interface IElementsProps {
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
  urlImg: string;
}

interface ICard {
  // openModalTeamDetails?: () => void;
  elem: IElementsProps;
  type?: string;
}
function Card({ elem, type }: ICard) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <TeamCard>
        <figure>
      <img
        src={
          elem.urlImg ||
          'https://cdn-icons-png.flaticon.com/128/1177/1177568.png'
        }
        alt='Logo do time'
      />
        </figure>


        {type === 'profile' && (
          <div className='box-notification'>
            <FaEnvelope className='svg-envelope-style' />
            <span>2</span>
          </div>
        )}
      </SectionImagem>
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
      {type === 'profile' ? (
        <div className='btnContainer'>
          <Button
            color='#000000'
            backGround='#93C335'
            // onClick={openModalTeamDetails}
          >
            Editar
          </Button>
          <Button
            onClick={() => setIsVisible(true)}
            color='#000000'
            backGround='#93C335'
          >
            Excluir
          </Button>
        </div>
      ) : (
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
            elem={elem}
          />
        )}
      </div>
      )}
    </TeamCard>
  );
}

export default Card;
