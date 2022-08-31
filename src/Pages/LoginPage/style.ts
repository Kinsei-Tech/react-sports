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
    min-height: 20vh;
    width: 100vw;
    background-color: var(--color-green-primary);
    display: flex;
    align-items: start;
    justify-content: space-between;
    div {
      .logo {
        width: 150px;
        height: 100px;
      }
    }
    .divLogin {
      display: flex;
      align-items: center;
      position: relative;
      width: 100px;
      margin-top: 5%;

      svg {
        fill: var(--color-green-primary-blur);
      }
      button {
        width: 50px;
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

  .Player {
    height: 65vh;
    width: 320px;
    position: absolute;
    bottom: 20vh;
    z-index: 9;
  }

  ul {
    width: 90vw;
    height: 198px;
    z-index: 99;
    display: flex;
    overflow-x: scroll;
    gap: 1px;
    margin-bottom: -22vh;
    border-radius: 20px 20px 20px 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      list-style: none;
      max-height: 198px;
      min-width: 100%;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      position: relative;
      border: 2px solid var(--color-yellow-second);
      border-radius: 20px 20px 20px 20px;
      div {
        width: 71%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--color-green-primary-blur);
        border-radius: 20px 0px 0px 20px;
        padding: 20px;
        gap: 20px;
        color: var(--gray-0);
      }
      .ImgCarrosel {
        max-height: 198px;
        height: 100%;
        max-width: 30%;
        object-fit: cover;
        position: absolute;
        right: -1px;
        bottom: 0px;
        border-radius: 0px 20px 20px 0px;
      }
    }
  }
  footer {
    height: 20vh;
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
    }
  }
`;

export default ContainerLoginPage;
