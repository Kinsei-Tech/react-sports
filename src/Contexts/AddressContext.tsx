import { createContext } from 'react';
import { IProvider } from '../Interfaces/Global';

export const AddressContext = createContext({});

const AddressProvider = ({ children }: IProvider) => {
  return (
    <AddressContext.Provider value={{}}>{children}</AddressContext.Provider>
  );
};

export default AddressProvider;
