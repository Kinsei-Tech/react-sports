import { useState } from 'react';
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
  return (
    <>
      <p>
        {userName} solicitou entrada no time {teamsName} como {userPosition}.
      </p>
      <div>
        <Button color='var(--gray-2)' backGround='var(--color-yellow-primary)'>
          Aceitar
        </Button>
        <Button color='var(--gray-0)' backGround='var(--error)'>
          Recusar
        </Button>
      </div>
    </>
  );
};

export default CardRequestTeam;
