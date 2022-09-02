import { createContext } from 'react';
import { IProvider } from '../Interfaces/Global';

export const NetworksContext = createContext({});

const NetworksProvider = ({ children }: IProvider) => {
  return (
    <NetworksContext.Provider value={{}}>{children}</NetworksContext.Provider>
  );
};

export default NetworksProvider;
