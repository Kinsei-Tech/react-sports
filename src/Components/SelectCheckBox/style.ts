import styled from "styled-components";
const SelectCheckBoxStyled = styled.div`
  fieldset {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid #6e9423;
  border-radius: 8px;

  background-color: #d9d9d9;

  &:focus {
    border-color: #85b329;
  }

  &:hover {
    border: 2px solid #85b329;
  }

    label {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
  }
`;
export default SelectCheckBoxStyled;
