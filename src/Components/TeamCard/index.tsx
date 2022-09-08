import '../../Pages/Dashboard/style';
import { /* SectionImagem,  */ TeamCard } from './style';
import Button from '../../Components/Button';
import { useState } from 'react';
import DropRequestDashboard from '../DropRequestDashboard';

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
  elem: IElementsProps;
  type?: string;
}
function Card({ elem, type }: ICard) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <TeamCard>
      {/* <SectionImagem> */}
      <div className='divImg-Description'>
        <section>
          <figure>
            <img
              src={
                elem.urlImg ||
                'https://cdn-icons-png.flaticon.com/128/1177/1177568.png'
              }
              alt='Logo do time'
            />
          </figure>
        </section>
        {/* </SectionImagem> */}
        <div className='description'>
          <h2>{elem.name}</h2>
          <p>{elem.description}</p>
        </div>
      </div>

      <div className='infos'>
        <span>{elem.placeName}</span>
        <span>
          {elem?.positionsSearchedFor.map((position) => position + ' /')}
        </span>
      </div>
      {type === 'profile' ? (
        <div className='btnContainer'>
          <Button color='#000000' backGround='#93C335'>
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
          <Button color='#000000' backGround='#93C335'>
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
