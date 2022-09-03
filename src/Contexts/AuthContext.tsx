import { createContext, useState } from 'react';
import { IProvider } from '../Interfaces/Global';

interface IAuthContext {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IProvider) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        setIsOpenModal,
        isOpenModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
