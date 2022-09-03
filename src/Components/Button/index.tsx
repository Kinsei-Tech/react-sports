import { ButtonHTMLAttributes } from 'react';
import ButtonStyle from './style';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color:
    | 'green_white'
    | 'green_black'
    | 'yellow'
    | 'none'
    | 'transparent_green';
  height?: '40px' | string;
  width?: '100%' | string;
}

const Button: React.FC<IButtonProps> = ({
  color,
  height,
  width,
  children,
  ...rest
}) => {
  return (
    <ButtonStyle color={color} height={height} width={width} {...rest}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
