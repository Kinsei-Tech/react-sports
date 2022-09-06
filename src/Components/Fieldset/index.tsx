import { FieldValues, UseFormRegister } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import Input from '../Input';
import { FieldsetStyle } from './style';

interface ICheckBox {
  label: string;
  name: string;
  value: string;
}

interface ITextInput {
  placeholder: string;
  name: string;
  label: string;
}

interface IFieldSet {
  type: 'textInput' | 'checkbox';
  legend: string;
  checkboxArr?: ICheckBox[];
  textInputArr?: ITextInput[];
  register: UseFormRegister<FieldValues>;
}

const FieldSet = ({
  type,
  legend,
  checkboxArr,
  textInputArr,
  register,
}: IFieldSet) => {
  const conditionalRender = () => {
    switch (type) {
      case 'checkbox':
        return (
          <FieldsetStyle>
            <legend>{legend}</legend>
            <ul>
              {checkboxArr?.map((option) => {
                return (
                  <li key={uuid()}>
                    <label>
                      <input
                        type='checkbox'
                        value={option.value}
                        {...register(option.name)}
                      />
                      <span>{option.label}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </FieldsetStyle>
        );
      case 'textInput':
        return (
          <FieldsetStyle>
            <legend>{legend}</legend>
            {textInputArr?.map((option) => {
              return (
                <Input
                  key={uuid()}
                  type='text'
                  placeholder={option.placeholder}
                  register={register}
                  name={option.name}
                  label={option.label}
                />
              );
            })}
          </FieldsetStyle>
        );
    }
  };
  return <>{conditionalRender()}</>;
};

export default FieldSet;
