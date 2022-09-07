import { ReactNode } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { FieldsetCheckbox, FieldsetRadio, FieldsetStyle } from './style';

interface ICheckBox {
  label: string;
  name: string;
  value: string;
}

interface IFieldSet {
  type: 'textInput' | 'checkbox' | 'radio';
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
            <FieldsetCheckbox>
              <legend>{legend}</legend>
              {checkboxArr?.map((option) => {
                return (
                  <label key={uuid()} className='container'>
                    {option.label}
                    <input
                      type='checkbox'
                      value={option.value}
                      {...register(option.name)}
                    />
                    <span className='checkmark'></span>
                  </label>
                );
              })}
            </FieldsetCheckbox>
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
      case 'radio':
        return (
          <FieldsetRadio>
            <legend>{legend}</legend>
            <label className='container'>
              Sim
              <input type='radio' value='yes' {...register('isExercising')} />
              <span className='checkmark'></span>
            </label>
            <label className='container'>
              Não
              <input type='radio' value='no' {...register('isExercising')} />
              <span className='checkmark'></span>
            </label>
          </FieldsetRadio>
        );
    }
  };
  return <>{conditionalRender()}</>;
};

export default FieldSet;
