import styled from 'styled-components';

export const Main = styled.main`
  background-color: #d9d9d9;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;

  .createTeam {
    width: 40px;
    margin: 20px 0;
    margin-left: 20px;
  }

  .onHoverInfo {
    display: none;
  }

  .buttonsFilter {
    display: flex;
    .btn {
      width: 58%;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .filter {
        width: 90%;
      }
      .hoverClass {
        .createTeam {
          margin: 20px auto;
        }
      }
    }
    .searchArea {
      display: none;
    }
  }
  .filter {
    margin-top: 20px;
    margin-left: 10px;
    width: 50%;
  }

  .teamsCards {
    margin-top: 30px;
    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      height: 60vh;

      overflow-y: overlay;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-border-radius: 10px;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: var(--color-yellow-second);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
      }
    }
    /*       button {
        background-color: var(--color-green-primary);
        &:hover {
          background-color: var(--color-green-primary-hover);
        }
      }
    } */
  }
  @media (min-width: 930px) {
    .buttonsFilter {
      width: 70%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      .btn {
        width: 40%;
        display: flex;
        justify-content: start;
        .hoverClass {
          display: flex;
          flex-direction: row;
          &:hover {
            .onHoverInfo {
              background-color: white;
              width: fit-content;
              transition: display 2s;
              height: 40px;
              margin-top: 20px;
              align-items: center;
              padding: 0 15px;
              border-radius: 0 8px 8px 0;
              border: 0;
            }

            .onHoverInfo {
              display: flex;
              background-color: white;
            }

            .createTeam {
              border-radius: 8px 0 0 8px;
            }
          }
        }
        .filter {
          width: 152px;
        }
      }
      .searchArea {
        display: flex;
        justify-content: end;
        width: 60%;

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
    }

    ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 80vw;
      margin: 0 auto;
    }
  }
`;
