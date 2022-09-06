import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProvider } from '../Interfaces/Global';
import api from '../services/api';
import { FieldValues } from 'react-hook-form';
import toast from 'react-hot-toast';

export const AuthContext = createContext<userContextData>(
  {} as userContextData
);

export interface IDataRegister {
  email: string;
  name: string;
  password: string;
  height?: number;
  weight?: number;
  age: number;
  state: string;
  telephone: number;
  isDoingSports: string;
  positions: string[];
}

export interface IUserData {
  id: number;
  name: string;
  email: string;
  height?: number;
  weight?: number;
  age: number;
  state: string;
  telephone: number;
  isDoingSports: string;
  cep: string;
  city: string;
  positions: string[];
}

export interface IDataLogin {
  email: string;
  password: string;
}

interface userContextData {
  userRegister: (IDataRegister: FieldValues) => void;
  userLogin: (IDataLogin: FieldValues) => void;
  user: IUserData;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthProvider = ({ children }: IProvider) => {
  const localUser = localStorage.getItem('userObject');
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localUser!));

  const [isOpenModal, setIsOpenModal] = useState(false);
  const userRegister = (data: FieldValues) => {
    delete data.confirmPassword;
    const postAPI = () => {
      const response = api.post('/users', data).then((response) => {
        response.status === 201 && navigate('/');
      });
      return response;
    };
    toast.promise(postAPI(), {
      loading: 'Loading',
      success: 'Conta criada com sucesso!',
      error: 'E-mail já cadastrado!',
    });
  };

  const userLogin = (data: FieldValues) => {
    const postAPI = () => {
      const response = api.post('/login', data).then((response) => {
        localStorage.setItem('@accessToken', response.data.accessToken);
        api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
        /*   console.log(response.data.accessToken); */
        localStorage.setItem('@id', response.data.user.id);

        setUser(response.data.user);
        localStorage.setItem('userObject', JSON.stringify(response.data.user));

        navigate('/dashboard', { replace: true });
      });
      return response;
    };
    toast.promise(postAPI(), {
      loading: 'Loading',
      success: 'Bem vind@!',
      error:
        'Infelizmente, não conseguimos te logar.Verifique se email e senha estão corretos',
    });
  };

  return (
    <AuthContext.Provider
      value={{ userRegister, userLogin, user, isOpenModal, setIsOpenModal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
