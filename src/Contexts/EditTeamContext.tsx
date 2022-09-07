import { createContext } from 'react';
import { IProvider } from '../Interfaces/Global';

interface IEditTeamContext {}

export const EditTeamContext = createContext<IEditTeamContext>(
  {} as IEditTeamContext
);

const EditTeamProvider = ({ children }: IProvider) => {
  return (
    <EditTeamContext.Provider value={{}}>{children}</EditTeamContext.Provider>
  );
};

export default EditTeamProvider;
