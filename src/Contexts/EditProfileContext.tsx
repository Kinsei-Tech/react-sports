import { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { IProvider } from '../Interfaces/Global';
import api from '../services/api';
import { AddressContext } from './AddressContext';
import { AuthContext } from './AuthContext';

interface IEditProfileContext {
  getProfileInfo: () => void;
  urlImg: string;
  setUrlImg: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  telephone: string;
  setTelephone: React.Dispatch<React.SetStateAction<string>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  isExercising: string;
  setIsExercising: React.Dispatch<React.SetStateAction<string>>;
  positions: string[];
  setPositions: React.Dispatch<React.SetStateAction<string[]>>;
  editProfile: (data: object) => void;
}

export const EditProfileContext = createContext<IEditProfileContext>(
  {} as IEditProfileContext
);

const EditProfileProvider = ({ children }: IProvider) => {
  const { user, setUser } = useContext(AuthContext);
  const { setCep } = useContext(AddressContext);

  const [urlImg, setUrlImg] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [isExercising, setIsExercising] = useState('');
  const [positions, setPositions] = useState<string[]>([]);

  const getProfileInfo = () => {
    if (user) {
      api.get(`/users/${user?.id}`).then((res) => {
        setUser(res.data);
        setUrlImg(user.urlImg);
        setName(user.name);
        setEmail(user.email);
        setTelephone(user.telephone);
        user.height && setHeight(user.height);
        user.weight && setWeight(user.weight);
        setAge(user.age);
        setIsExercising(user.isExercising);
        setPositions(user.positions);
        setCep(user.cep);
      });
    }
  };

  const editProfile = (data: object) => {
    if (user) {
      const patchAPI = () => {
        const response = api
          .patch(`users/${user.id}`, data)
          .then((res) => console.log(res));

        return response;
      };
      toast.promise(patchAPI(), {
        loading: 'Loading',
        success: 'Perfil editado com sucesso',
        error: 'Infelizmente, não conseguimos editar seu perfil',
      });
    }
  };

  return (
    <EditProfileContext.Provider
      value={{
        getProfileInfo,
        urlImg,
        setUrlImg,
        age,
        setAge,
        email,
        setEmail,
        height,
        setHeight,
        isExercising,
        setIsExercising,
        name,
        setName,
        positions,
        setPositions,
        telephone,
        setTelephone,
        weight,
        setWeight,
        editProfile,
      }}
    >
      {children}
    </EditProfileContext.Provider>
  );
};

export default EditProfileProvider;
