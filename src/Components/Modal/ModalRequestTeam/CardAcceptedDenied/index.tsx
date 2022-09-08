import { useContext, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { AuthContext } from '../../../../Contexts/AuthContext';
import { TeamsContext } from '../../../../Contexts/TeamsContext';
import { LiStyle } from './style';

interface ICardAcceptedDeniedProps {
  type?: string;
  name: string;
}

interface ITeam {
  cep: string | number;
  city: string;
  description: string;
  id: string | number;
  maxAge: string | number;
  maxWeight: string | number;
  name: string;
  participantsId: string[];
  placeName: string;
  positionsSearchedFor: string[];
  requests: IRequests[];
  state: string;
  userId: string;
}

const CardAcceptedDenied = ({ type, name }: ICardAcceptedDeniedProps) => {
  const { user } = useContext(AuthContext);
  const [teamsId, setTeamsId] = useState<string>('');

  return (
    <>
      {type === 'Accepted' ? (
        <LiStyle>
          <div>
            <p>Sua solicitação para o grupo {name} foi aceita!</p>

            <span>Entre em contato com o time para mas informações.</span>
          </div>
          <FaCheck />
        </LiStyle>
      ) : (
        <LiStyle>
          <div>
            <p>Sua solicitação para o grupo {name} foi recusada!</p>
            <span>Entre em contato com o time para mas informações.</span>
          </div>
          <GrClose />
        </LiStyle>
      )}
    </>
  );
};

export default CardAcceptedDenied;
