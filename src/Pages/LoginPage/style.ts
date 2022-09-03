import styled from "styled-components";

const ContainerLoginPage = styled.div`
  background-color: var(--gray-0);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .headerPageLogin {
    height: 20%;
    width: 100vw;
    background-color: var(--color-green-primary);
    display: flex;
    align-items: start;
    justify-content: space-between;
    div {
      .logoMobile {
        width: 150px;
        height: 100px;
      }
    }
    .divLogin {
      display: flex;
      align-items: center;
      position: relative;
      width: 100px;
      margin-top: 3vh;

      svg {
        fill: var(--color-green-primary-blur);
      }
      button {
        width: 50px;
        z-index: 99;
        &:hover {
          transform: scale(1.1);
          transition: all 0.3s;
          filter: brightness(110%);
        }
      }
      ::after {
        content: "";
        width: 60px;
        height: 5px;
        background-color: var(--color-yellow-second);
        color: var(--color-yellow-second);
        position: absolute;
        bottom: 0px;
        right: 28px;
      }
    }
  }
  .mainPage {
    height: 60%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    .Player {
      height: 65vh;
      width: 320px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .logoDesktop {
      display: none;
    }
    ul {
      width: 90vw;
      z-index: 999;
      display: flex;
      overflow-x: scroll;
      gap: 1px;
      margin-right: 5vw;
      margin-bottom: 8vh;
      border-radius: 20px 20px 20px 20px;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        list-style: none;
        max-height: 198px;
        height: 198px;
        min-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        position: relative;
        border: 2px solid var(--color-yellow-second);
        border-radius: 20px 20px 20px 20px;
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          width: 71%;
          height: 100%;

          background-color: var(--color-green-primary-blur);
          border-radius: 20px 0px 0px 20px;
          padding: 20px;
          gap: 20px;
          color: var(--gray-0);
          border: 0;
        }
        .ImgCarrosel {
          background-color: var(--color-green-primary-blur);
          height: 100%;
          max-height: 199px;
          max-width: 31%;
          object-fit: cover;
          position: relative;
          right: 0px;
          bottom: 0px;
          border-radius: 0px 20px 20px 0px;
        }
      }
    }
  }

  footer {
    height: 20%;
    width: 100vw;
    background-color: var(--color-green-primary);
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      border: 2px solid var(--color-yellow-second);
      svg {
        fill: var(--color-green-primary-hover);
      }
      &:hover {
        transition: all 0.3s;
        transform: scale(1.1);
        filter: brightness(125%);
      }
    }
  }

  @media (min-width: 600px) {
    .mainPage {
      ul {
        max-width: 540px;
        max-height: 200px;
        height: 200px;

        li {
          div {
          }
          .ImgCarrosel {
            background-color: var(--color-yellow-second);
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    .headerPageLogin {
      width: 15vw;
      height: 100vh;
      justify-content: center;
      div {
        .logoMobile {
          display: none;
        }
      }
      .divLogin {
        right: 0px;
        top: 5vh;
      }
    }
    .mainPage {
      width: 70vw;
      height: 100vh;
      background-color: var(--color-green-primary);

      .logoDesktop {
        display: block;
        position: absolute;

        width: 50%;
        left: 5vw;
        top: 10%;
      }
      .Player {
        height: 95%;
        width: 500px;

        right: -20%;
        bottom: 5vh;
      }
      ul {
        max-height: 250px;
        height: 250px;
        margin: 0;
        right: -12vw;
        bottom: 5vh;
        position: absolute;
        li {
          max-height: 250px;
          height: 100%;
          .ImgCarrosel {
            max-height: none;
          }
        }
      }
    }
    footer {
      background-color: white;
      height: 100vh;
      width: 15vw;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      justify-items: flex-end;
      gap: 50px;
      padding-bottom: 150px;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    .headerPageLogin {
      div {
        position: absolute;
        left: 0;
        top: 0;
        .logoMobile {
          width: 300px;
          height: 200px;
          display: none;
        }
      }
    }

    .mainPage {
      width: 70vw;
      height: 100vh;
      background-color: var(--color-green-primary);

      .logoDesktop {
        display: block;
        position: absolute;

        width: 50%;
        left: 5vw;
        top: 10%;
      }
    }
    footer {
    }
  }
  @media (min-width: 1366px) {
    .mainPage {
      .logoDesktop {
        display: block;
        position: absolute;
        max-width: 500px;
        left: 5vw;
        top: 10%;
      }
      .Player {
      }
    }
  }
`;

export default ContainerLoginPage;
