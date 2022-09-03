import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { IProvider } from '../Interfaces/Global';
import api from '../services/api';
import { FieldValues } from 'react-hook-form';


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
  isExercising: boolean;
  positions: [];
}

export interface IUserData {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  age: number;
  state: string;
  telephone: number;
  isExercising: boolean;
  positions: [];
}

export interface IDataLogin {
  email: string;
  password: string;
}

interface userContextData {
  userRegister: (IDataRegister: FieldValues) => void;
  userLogin: (IDataLogin: FieldValues) => void;
  user: IUserData;
}

const AuthProvider = ({ children }: IProvider) => {
  const localUser = localStorage.getItem('userObject');
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localUser!));

  const userRegister = (data: FieldValues) => {
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
        localStorage.setItem('@id', response.data.user.id);
        //const {user: userResponse} = response.data
        setUser(response.data.user.id);
        localStorage.setItem('userObject', JSON.stringify(response));

        navigate('/dashboard', {replace: true});
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
    <AuthContext.Provider value={{ userRegister, userLogin, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
