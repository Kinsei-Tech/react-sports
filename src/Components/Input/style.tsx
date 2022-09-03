import styled from 'styled-components';

const InputStyle = styled.input`
  height: 30px;
  width: auto;

  padding: 18px 0px 18px 28px;

  margin-top: 5px;

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
