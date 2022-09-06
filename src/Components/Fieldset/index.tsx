import { ReactNode } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { FieldsetStyle } from './style';

interface ICheckBox {
  label: string;
  name: string;
  value: string;
}

interface IFieldSet {
  type: 'textInput' | 'checkbox';
  legend: string;
  checkboxArr?: ICheckBox[];
  children?: ReactNode;
  register: UseFormRegister<FieldValues>;
}

const FieldSet = ({
  type,
  legend,
  checkboxArr,
  children,
  register,
}: IFieldSet) => {
  const conditionalRender = () => {
    switch (type) {
      case 'checkbox':
        return (
          <>
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
            {children}
          </>
        );
      case 'textInput':
        return (
          <FieldsetStyle>
            <legend>{legend}</legend>
            {children}
          </FieldsetStyle>
        );
    }
  };
  return <>{conditionalRender()}</>;
};

export default FieldSet;
