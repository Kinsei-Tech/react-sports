import { useContext, useState } from 'react';
import TeamsProvider, { TeamsContext } from '../../../../Contexts/TeamsContext';
import api from '../../../../services/api';
import Button from '../../../Button';
import { LiStyle } from './style';

interface ICardRequestTeamProps {
  idUserRequest: string;
  teamsName: string;
  userName: string;
  userPosition: string;
}

const CardRequestTeam = ({
  idUserRequest,
  teamsName,
  userName,
  userPosition,
}: ICardRequestTeamProps) => {
  const { accRequestTeam } = useContext(TeamsContext);
  return (
    <>
      <p>
        {userName} solicitou entrada no time {teamsName} como {userPosition}.
      </p>
      <div>
        <Button
          color='var(--gray-2)'
          backGround='var(--color-yellow-primary)'
          onClick={() => accRequestTeam(teamsName, idUserRequest, 'accepted')}
        >
          Aceitar
        </Button>
        <Button
          color='var(--gray-0)'
          backGround='var(--error)'
          onClick={() => accRequestTeam(teamsName, idUserRequest, 'denied')}
        >
          Recusar
        </Button>
      </div>
    </>
  );
};

export default CardRequestTeam;
