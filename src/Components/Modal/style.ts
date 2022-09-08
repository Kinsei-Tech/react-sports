import styled, { css } from 'styled-components';

interface IModalStyle {
  expandedModal?: boolean;
}

const ModalStyle = styled.div<IModalStyle>`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 15px;
  background-color: red;

  background: var(--gray-2-blur);

  position: fixed;
  z-index: 9999;

  .Modal {
    min-height: auto;
    margin: 5vh auto;

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
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 18px;
    height: 50px;
    border-radius: 16px 16px 0px 0px;
    background-color: var(--color-green-primary);

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0px;
      height: 25px;
      width: 25px;
      background-color: var(--color-yellow-primary);
      border-radius: 50%;
      border: none;

      -webkit-box-shadow: 0px 10px 13px -7px #000000,
        5px 5px 15px 5px rgba(0, 0, 0, 0);
      box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

      transition: 0.5s;

      &:hover {
        background-color: var(--color-yellow-primary-hover);
        transition: 0.5s;
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

  ul {
    width: 100%;
    overflow: auto;
    max-height: 120px;
    @media (min-width: 930px) {
      section + section {
        margin-left: 30px;
      }
    }
    li.mssagm {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      height: 89px;
      width: inherit;
      text-align: center;
      font-size: 22px;
      font-weight: 800;
      color: var(--gray-2);

      &::after {
        content: '';
        align-self: center;
        height: 2.5px;
        width: 256px;
        background-color: var(--color-yellow-second);
        margin-top: 10px;
      }
    }
  }
`;
