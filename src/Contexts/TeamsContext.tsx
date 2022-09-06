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
}

export const TeamsContext = createContext<ITeamsContext>({} as ITeamsContext);

const TeamsProvider = ({ children }: IProvider) => {
  const createTeam = (data: FieldValues) => {
    data.userId = localStorage.getItem('@id');
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

  return (
    <TeamsContext.Provider value={{ createTeam }}>
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsProvider;
