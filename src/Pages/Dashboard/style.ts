import styled from "styled-components";

export const Main = styled.main`
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .createTeam {
    width: 40px;
    margin: 20px;
    margin-left: 20px;
  }

  .filter {
    margin-top: 20px;
    margin-left: 10px;
    width: 50%;
  }

  Button {
    background-color: var(--color-green-primary);
    &:hover {
      background-color: var(--color-green-primary-hover);
    }
  }

  @media (max-width: 930px) {
    .searchArea {
      display: none;
    }
  }

  @media (min-width: 930px) {
    .buttonsFilter {
      margin-left: 13%;
      margin-right: 13%;
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .filter {
      width: 152px;
    }

    .searchArea {
      margin-top: 20px;

      input {
        width: 150px;
        height: 40px;
        border-radius: 8px 0 0 8px;
      }

      button {
        width: 80px;
        padding: 0 10px;
        font-size: medium;
        border-radius: 0 8px 8px 0;
      }
    }

    ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
