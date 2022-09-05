import { SelectHTMLAttributes } from 'react';
import Label from '../Label';
import SelectStyle from './style';

interface IFieldsetProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  fieldset?: string;
}

const Select = ({ label, ...rest }: IFieldsetProps) => {
  return (
    <>
      <Label>
        {label && <span> {label}</span>}
        <SelectStyle {...rest} />
      </Label>
    </>
  );
};

export default Select;
