import styled from 'styled-components';

interface IInputStyle {
  height?: string;
}
const InputStyle = styled.input<IInputStyle>`
  height: ${(props) => props.height || '30px'};
  width: auto;

  padding-left: 10px;

  border: 2px solid var(--color-green-primary-hover);

  border-radius: 8px;

  background-color: var(--gray-0);

  &:focus {
    border-color: var(--color-green-primary-hover);
  }

  &:hover {
    border: 2px solid var(--color-green-primary-hover);
  }

  &::placeholder {
    color: var(--color-green-primary-hover);
  }
`;
export default InputStyle;
