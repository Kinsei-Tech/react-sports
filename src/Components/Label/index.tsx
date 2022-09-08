import { ReactNode } from "react";
import LabelStyled from "./style";
interface ILabelProps {
  children: ReactNode;
}

const Label = ({ children }: ILabelProps) => {
  return <LabelStyled>{children}</LabelStyled>;
};

export default Label;
