import styled from 'styled-components';

interface IInputStyle {
  height?: string;
}
const InputStyle = styled.input<IInputStyle>`
  height: ${(props) => props.height || '30px'};

  padding: 18px 18px 18px 18px;

  border: 3px solid var(--color-green-primary);

  border-radius: 8px;

  background-color: var(--gray-0);

  color: var(--gray-2);

  &:focus {
    transition: all 800ms;
    border-color: var(--color-green-primary-hover);
  }

  &::placeholder {
    color: var(--color-green-primary-hover);
  }
`;
export default InputStyle;
