import { createContext, useEffect, useState } from 'react';
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
  height?: string;
  weight?: string;
  age: string;
  state: string;
  telephone: string;
  isExercising: string;
  cep: string;
  city: string;
  positions: string[];
  urlImg: string;
}

export interface IDataLogin {
  email: string;
  password: string;
}

interface userContextData {
  userRegister: (IDataRegister: FieldValues) => void;
  userLogin: (IDataLogin: FieldValues) => void;
  user: IUserData | null | undefined;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModalCreateYourTeam: boolean;
  setIsModalCreateYourTeam: React.Dispatch<React.SetStateAction<boolean>>;
  isModalEditYourTeam: boolean;
  setIsModalEditYourTeam: React.Dispatch<React.SetStateAction<boolean>>;
  isModalRequest: boolean;
  setIsModalRequest: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<any>;
  userLocalStorage: IUserData;
  userImg: string | undefined;
  setUserImg: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const AuthProvider = ({ children }: IProvider) => {
  const localUser = localStorage.getItem('userObject');

  const [userLocalStorage, setUserLocalStorage] = useState(
    JSON.parse(localUser!)
  );
  const [user, setUser] = useState<IUserData | null>();
  const [teamDashBoard, setTeamDashBoard] = useState();
  const [teamProfile, setTeamProfile] = useState();
  const [userImg, setUserImg] = useState<string>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isModalCreateYourTeam, setIsModalCreateYourTeam] = useState(false);
  const [isModalEditYourTeam, setIsModalEditYourTeam] = useState(false);
  const [isModalRequest, setIsModalRequest] = useState(false);
  const navigate = useNavigate();

  const userRegister = (data: FieldValues) => {
    delete data.confirmPassword;
    data.teamsRequestedToJoin = [];
    data.teamsRequestAccepted = [];
    data.teamsRequestDenied = [];
    data.socialNetworks = [];
    if (data.urlImg.length < 1) {
      data.urlImg = 'https://cdn-icons-png.flaticon.com/128/1177/1177568.png';
    }
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
        localStorage.setItem('userObject', JSON.stringify(response.data.user));
        localStorage.setItem('@userImg', response.data.user.urlImg);
        api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
        setUser(response.data.user);
        setUserLocalStorage(response.data.user);
        setUserImg(response.data.user.urlImg);
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

  useEffect(() => {
    const token = localStorage.getItem('@accessToken');
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userRegister,
        userLogin,
        user,
        isOpenModal,
        setIsOpenModal,
        isModalCreateYourTeam,
        setIsModalCreateYourTeam,
        isModalEditYourTeam,
        setIsModalEditYourTeam,
        isModalRequest,
        setIsModalRequest,
        setUser,
        userLocalStorage,
        userImg,
        setUserImg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
