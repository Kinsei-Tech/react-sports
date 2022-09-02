import { createContext } from 'react';
import { IProvider } from '../Interfaces/Global';

export const AuthContext = createContext({});

const AuthProvider = ({ children }: IProvider) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
