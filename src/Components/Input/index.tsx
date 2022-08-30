import { InputHTMLAttributes } from "react";
import Label from "../Label";
import InputStyle from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
  type?: string;
}

const Input = ({ type, placeholder, label, ...rest }: IInputProps) => {
  return (
    <>
      <Label>
        {label && <span> {label}</span>}
        <InputStyle placeholder={placeholder} type={type} {...rest} />
      </Label>
    </>
  );
};

export default Input;
