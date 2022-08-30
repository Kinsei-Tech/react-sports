import styled from "styled-components";

const InputStyle = styled.input`
  height: 30px;
  width: auto;

  padding-left: 10px;

  border: 2px solid #6e9423;
  border-radius: 8px;

  background-color: #d9d9d9;

  &:focus {
    border-color: #85b329;
  }

  &:hover {
    border: 2px solid #85b329;
  }

  &::placeholder {
    color: #6e9423;
  }
`;
export default InputStyle;
