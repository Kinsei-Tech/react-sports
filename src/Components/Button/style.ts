import styled from "styled-components";
import { IButtonProps } from "./";

type IButtonStyleProps = Omit<IButtonProps, "children">;

const ButtonStyle = styled.button<IButtonStyleProps>`
  height: 40px;
  width: ${(props) => props.width || "100%"};

  color: ${({ color }) => color};
  cursor: pointer;

  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: ${({ backGround }) => backGround};
  &:hover {
    background-color: ${({ colorHover }) => colorHover};
  }
`;

export default ButtonStyle;
