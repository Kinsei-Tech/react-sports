import styled from "styled-components";
const SelectStyle = styled.select`
  height: 30px;
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
export default SelectStyle;
