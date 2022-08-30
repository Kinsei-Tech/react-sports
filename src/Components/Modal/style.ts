import styled from "styled-components";

const ModalStyle = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 15px;

  background: var(--gray-2-blur);

  position: absolute;
  z-index: 9999;

  div {
    max-width: 400px;
    min-height: auto;
    margin: 20% auto;
    header {
      height: 50px;
      border-radius: 16px 16px 0px 0px;
      background-color: var(--color-green-primary);
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
          fill: var(--color-yellow-primary);
          position: absolute;
          top: -3px;
          left: -3px;
          &:hover {
            fill: var(--color-yellow-primary-hover);
          }
          path {
            color: var(--color-yellow-primary);
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
      background-color: var(--gray-0);
    }
  }
`;

export default ModalStyle;