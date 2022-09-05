import styled, { css } from 'styled-components';
import { IButtonProps } from './';

type IButtonStyleProps = Omit<IButtonProps, 'children'>;

const ButtonStyle = styled.button<IButtonStyleProps>`
  height: 40px;
  width: ${(props) => props.width || '100%'};

  color: ${({ color }) => color};

  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: ${({ backGround }) => backGround};
  &:hover {
    background-color: ${({ colorHover }) => colorHover};
  }

  ${(props) => {
    switch (props.color) {
      case 'green_white':
        return css`
          color: var(--gray-0);
          background-color: var(--color-green-primary);

          &:hover {
            background-color: var(--color-green-primary-hover);
          }

          &:disabled {
            background-color: var(--color-green-primary-negative);
          }
        `;
      case 'green_black':
        return css`
          color: var(--gray-2);
          background-color: var(--color-green-primary);

          &:hover {
            color: var(--gray-0);
            background-color: var(--color-green-primary-hover);
          }
        `;
      case 'yellow':
        return css`
          color: var(--gray-2);
          background-color: var(--color-yellow-primary);

          &:hover {
            background-color: var(--color-yellow-primary-hover);
          }
          &:disabled {
            background-color: var(--color-yellow-primary-negative);
          }
        `;
      case 'none':
        return css`
          color: none;
          background-color: transparent;
        `;
      case 'transparent_green':
        return css`
          background-color: transparent;
          color: var(--color-green-primary-hover);
        `;
    }
  }}
`;

export default ButtonStyle;
