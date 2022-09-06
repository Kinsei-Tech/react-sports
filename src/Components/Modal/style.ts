import styled, { css } from 'styled-components';

interface IModalStyle {
  expandedModal?: boolean;
}

const ModalStyle = styled.div<IModalStyle>`
  width: 100vw;
  height: 100vh;

  padding: 15px;

  background: var(--gray-2-blur);

  position: absolute;
  z-index: 9999;

  div {
    min-height: auto;
    margin: 18vh auto;

    max-width: 400px;

    ${(props) => {
      if (props.expandedModal) {
        return css`
          @media (min-width: 930px) {
            max-width: 800px;
          }
        `;
      }
    }}
  }

  .headerModal {
    height: 50px;
    border-radius: 16px 16px 0px 0px;
    background-color: var(--color-green-primary);
    position: relative;
    width: auto;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 16px;
    max-height: 100px;
    width: 100%;
    margin: 0;
    padding: 10px;
    gap: 10px;
    border-radius: 0px 0px 16px 16px;
    background-color: var(--gray-0);
  }
`;

export default ModalStyle;

export const Container = styled.section`
  background-color: var(--gray-0);
  border-radius: 0 0 16px 16px;

  padding: 15px;

  h2 {
    text-align: center;

    color: var(--color-green-primary-hover);
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
  }

  section {
    align-items: center;
  }
`;
