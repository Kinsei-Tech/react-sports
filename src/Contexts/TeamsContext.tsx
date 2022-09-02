import { createContext } from 'react';
import { IProvider } from '../Interfaces/Global';

export const TeamsContext = createContext({});

const TeamsProvider = ({ children }: IProvider) => {
  return <TeamsContext.Provider value={{}}>{children}</TeamsContext.Provider>;
};

export default TeamsProvider;
