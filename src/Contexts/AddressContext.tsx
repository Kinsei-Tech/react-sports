import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { IProvider } from '../Interfaces/Global';
import addressApi from '../services/addressApi';

export const AddressContext = createContext<addressContextData>(
  {} as addressContextData
);

export interface addressContextData {
  getAddress: (cep: string) => void;
  city: string | undefined;
  setCity: Dispatch<SetStateAction<undefined>>;
  state: string | undefined;
  setState: Dispatch<SetStateAction<undefined>>;
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
}

export interface addressResponse {
  cep: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade: string;
  uf: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

const AddressProvider = ({ children }: IProvider) => {
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [cep, setCep] = useState('');

  const getAddress = (cep: string) => {
    addressApi.get(`${cep}/json/`).then((response) => {
      setCity(response.data.localidade);
      setState(response.data.uf);
    });
  };

  return (
    <AddressContext.Provider
      value={{ getAddress, city, setCity, state, setState, cep, setCep }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
