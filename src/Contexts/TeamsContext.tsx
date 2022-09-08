import { createContext, useState } from 'react';
import { IProvider } from '../Interfaces/Global';
import { FieldValues } from 'react-hook-form';
import api from '../services/api';
import toast from 'react-hot-toast';

interface ITeamsContext {
  createTeam: (data: FieldValues) => void;
  requestTeam: (
    id: number | undefined,
    userRequest: string | undefined,
    position: string,
    elemId: number,
    ArrayRequests: string[]
  ) => void;
  teamDashBoard: [] | undefined;
  getTeams: () => Promise<void>;
  accRequestTeam: (name: string, idUserRequest: string, type: string) => void;
}

export const TeamsContext = createContext<ITeamsContext>({} as ITeamsContext);

const TeamsProvider = ({ children }: IProvider) => {
  const [teamDashBoard, setTeamDashBoard] = useState();

  const createTeam = (data: FieldValues) => {
    data.userId = localStorage.getItem('@id');
    data.requests = [];
    data.participantsId = [];
    const postApi = () => {
      const response = api.post('/teams', data).then((response) => {
        getTeams();
      });
      return response;
    };
    toast.promise(postApi(), {
      loading: 'Criando time',
      success: 'Time Criado',
      error: 'Algo de errado não está certo',
    });
  };

  const requestTeam = (
    id: number | undefined,
    userRequest: string | undefined,
    position: string,
    elemId: number,
    ArrayRequests: string[]
  ) => {
    const data = {
      requests: [
        ...ArrayRequests,
        { name: userRequest, id: id, position: position },
      ],
    };
    const postApi = () => {
      const response = api
        .patch(`/teams/${elemId}`, data)
        .then((response) => response.data)
        .catch((error) => console.error(error));
      return response;
    };
    toast.promise(postApi(), {
      loading: 'Enviando solicitação ...',
      success: 'Solicitação enviada',
      error: 'Algo de errado não está certo',
    });
  };

  const getTeams = () => {
    return api
      .get('/teams')
      .then((response) => {
        setTeamDashBoard(response.data);
      })
      .catch((err) => console.error(err));
  };
  const accRequestTeam = (
    name: string,
    idUserRequest: string,
    type: string
  ) => {
    let data = {};
    if (type === 'accepted') {
      data = {
        teamsRequestAccepted: [{ name: name, id: idUserRequest }],
      };
    } else {
      data = {
        teamsRequestDenied: [{ name: name, id: idUserRequest }],
      };
    }
    const patchApi = () => {
      const response = api
        .patch(`/users/${idUserRequest}`, data)
        .then((response) => response.data)
        .catch((error) => console.error(error));
      return response;
    };
    toast.promise(patchApi(), {
      loading: 'Enviando resposta ...',
      success: ' Resposta enviada',
      error: 'Algo de errado não está certo',
    });
  };

  return (
    <TeamsContext.Provider
      value={{
        createTeam,
        requestTeam,
        accRequestTeam,
        teamDashBoard,
        getTeams,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsProvider;
