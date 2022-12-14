import { useContext } from 'react';
import Modal from '..';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../../../Contexts/AuthContext';
import { Container } from '../style';
import { FaEnvelope } from 'react-icons/fa';
import CardRequestTeam from './CardRequestTeam';
import CardAcceptedDenied from './CardAcceptedDenied';
import { HeaderModal } from './style';
import { LiStyle } from './CardRequestTeam/style';

export interface IRequests {
  id: string;
  name: string;
  position: string;
}

export interface ITeam {
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

interface ITeams2Props {
  teams2: ITeam[];
}

const ModalRequestList = ({ teams2 }: ITeams2Props) => {
  const { user } = useContext(AuthContext);
  const { setIsOpenModal } = useContext(AuthContext);

  const conditionalRender = (team: ITeam) => {
    if (team.requests.length > 0) {
      return team.requests.map((request) => (
        <LiStyle key={uuid()}>
          <CardRequestTeam
            idUserRequest={request.id}
            userName={request.name}
            teamsName={team.name}
            userPosition={request.position}
            key={uuid()}
          />
        </LiStyle>
      ));
    } else {
      return (
        <li className='mssagm' key={uuid()}>
          {team.name} não possui requisições
        </li>
      );
    }
  };

  return (
    <Modal setIsOpenModal={setIsOpenModal}>
      <Container>
        <HeaderModal>
          <FaEnvelope />
          <h2>Lista de Solicitações</h2>
        </HeaderModal>

        <ul>
          {teams2.length > 0 ? (
            teams2.map((team) => conditionalRender(team))
          ) : (
            <li className='mssagm'>Tu não possue time cadastrado!!</li>
          )}
        </ul>

        <ul>
          {user &&
            user.teamsRequestAccepted.length > 0 &&
            user.teamsRequestAccepted.map((teamsAccepted) => (
              <CardAcceptedDenied
                name={teamsAccepted?.name}
                type='Accepted'
                key={uuid()}
              />
            ))}
        </ul>

        <ul>
          {user &&
            user.teamsRequestDenied.length > 0 &&
            user.teamsRequestDenied.map((teamsAccepted) => (
              <CardAcceptedDenied name={teamsAccepted.name} key={uuid()} />
            ))}
        </ul>
      </Container>
    </Modal>
  );
};

export default ModalRequestList;
