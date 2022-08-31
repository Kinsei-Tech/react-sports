import styled from "styled-components";

const Container = styled.div`
  border: 2px solid #93c335;
  border-top: 0px;
  border-radius: 16px 16px 0px 0px;

  .div_Header {
    height: 60px;
    width: 100vw;
    border-radius: 16px 16px 0px 0px;
    background-color: #93c335;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .btn_RegisterHeader {
    background-color: var(--color-yellow-primary);
    border: none;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    margin-right: 1rem;
    font-size: 1rem;
  }

  .div_Container {
    padding: 1rem;
  }

  .div_ContainerFieldset {
    display: flex;
    flex-direction: column;
  }

  .div_InfoFieldset {
    display: flex;
    padding: 1rem;
    min-width: 50%;
    height: 45px;
    align-items: center;
    gap: 1rem;
  }

  .fieldPlayer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    border: 2px solid var(--color-green-primary);
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
  }

  .divBtnRegister {
    padding-top: 1rem;
  }

  .body_ContainerFieldSet {
    display: flex;
    flex-wrap: wrap;
  }

  label {
    font-size: 12px;
    gap: 5px;
  }
`;
export default Container;
