import { createContext } from 'react';
import { IProvider } from '../Interfaces/Global';
import { FieldValues } from 'react-hook-form';
import api from '../services/api';
import toast from 'react-hot-toast';

/* export interface IDataCreateTeams {
  name: string;
  placeName: string;
  cep: string;
  state: string;
  city: string;
  maxWeight: number;
  maxAge: number;
  userId: number; 
  description: string;
  positionsSearchedFor: string[];
  requests: string[];
  participantsId: number[];
} */

interface ITeamsContext {
  createTeam: (data: FieldValues) => void;
  requestTeam: (
    id: number | undefined,
    userRequest: string | undefined,
    position: string,
    elemId: number,
    ArrayRequests: string[]
  ) => void;
}

export const TeamsContext = createContext<ITeamsContext>({} as ITeamsContext);

const TeamsProvider = ({ children }: IProvider) => {
  const createTeam = (data: FieldValues) => {
    data.userId = localStorage.getItem('@id');
    data.requests = [];
    data.participantsId = [];
    const postApi = () => {
      const response = api.post('/teams', data).then((response) => {
        console.log(response);
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
    console.log(data);
    const postApi = () => {
      const response = api
        .patch(`/teams/${elemId}`, data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
      return response;
    };
    toast.promise(postApi(), {
      loading: 'Enviando solicitação ...',
      success: 'Solicitação enviada',
      error: 'Algo de errado não está certo',
    });
  };

  return (
    <TeamsContext.Provider value={{ createTeam, requestTeam }}>
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsProvider;
