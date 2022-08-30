import styled from "styled-components";

const ModalStyle = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 15px;

  background: rgba(0, 0, 0, 0.5);

  position: absolute;
  z-index: 9999;

  div {
    max-width: 400px;
    min-height: auto;
    margin: 20% auto;
    header {
      height: 50px;
      border-radius: 16px 16px 0px 0px;
      background-color: #93c335;
      position: relative;

      button {
        padding: 0px;
        height: 22px;
        width: 22px;
        background-color: black;
        position: absolute;
        border-radius: 0;
        right: 10px;
        top: 10px;
        svg {
          fill: #f2cc50;
          position: absolute;
          top: -3px;
          left: -3px;
          &:hover {
            fill: #f0c126;
          }
          path {
            color: #f2cc50;
          }
        }
      }
    }

    .footerModal {
      height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      padding: 10px;
      gap: 10px;
      border-radius: 0px 0px 16px 16px;
      background-color: #d9d9d9;
    }
  }
`;

export default ModalStyle;
