import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import Label from "../Label";
import InputStyle from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  type?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

const Input = ({
  type,
  placeholder,
  label,
  register,
  name,
  ...rest
}: IInputProps) => {
  return (
    <>
      <Label>
        {label && <span> {label}</span>}
        <InputStyle
          placeholder={placeholder}
          type={type}
          {...register(name)}
          {...rest}
        />
      </Label>
    </>
  );
};

export default Input;
