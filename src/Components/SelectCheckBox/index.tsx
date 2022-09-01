import { ReactNode } from "react";
import Label from "../Label";
import SelectCheckBoxStyled from "./style";

interface ISelectCheckBoxProps {
  label?: string;
  fieldset?: string;
  children: ReactNode;
}

const SelectCheckBox = ({ children, label }: ISelectCheckBoxProps) => {
  return (
    <>
      <Label>
        {label && <span> {label}</span>}
        <SelectCheckBoxStyled> {children}</SelectCheckBoxStyled>
      </Label>
    </>
  );
};

export default SelectCheckBox;
