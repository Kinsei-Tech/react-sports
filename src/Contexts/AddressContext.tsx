import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { IProvider } from '../Interfaces/Global';
import addressApi from '../Services/addressApi';

export const AddressContext = createContext<addressContextData>(
   {} as addressContextData
);

export interface addressContextData{
    getAddress: (data: FieldValues) => void;
    city: string | undefined;
    setCity: Dispatch<SetStateAction<undefined>>;
    state: string | undefined;
    setState: Dispatch<SetStateAction<undefined>>;
}

export interface addressResponse{
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

    const getAddress = (data: FieldValues) =>{
        const getAddresApi = () =>{
            const response = addressApi.get(`${data.cep}/json`, data).then((response) => {
                setCity(response.data.localidade);
                setState(response.data.uf);
            })
            return response;
        }
        getAddresApi();
    }

    return (
        <AddressContext.Provider
          value={{ getAddress, city, setCity, state, setState }}
        >
          {children}
        </AddressContext.Provider>
      );
}

export default AddressProvider