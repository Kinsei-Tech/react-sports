import styled from 'styled-components';

export const TeamCard = styled.li`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  position: relative;
  .divImg-Description {
    display: flex;
    gap: 10px;
    width: 90%;
    margin: 0 auto;
    section {
      max-width: 80px;
      max-height: 80px;

      overflow: hidden;
      figure {
        width: 100%;
        height: 100%;
        min-height: 80px;
        min-width: 80px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .description {
      width: 65%;
      h2 {
        margin-left: 10%;
        overflow: hidden;
        @media (max-width: 600px) {
          font-size: 18px;
        }
      }
      p {
        margin-left: 5%;
        word-break: break-all;
      }
    }
  }
  .infos {
    display: none;
  }
  .btnContainer {
    display: flex;
    width: 70%;
    margin: 0 auto;
    gap: 20px;
    position: relative;
    nav {
      display: flex;
      flex-direction: column;
      position: absolute;
      height: auto;
      /* width: 110px; */
      margin: 0;
      right: 0;
      bottom: 0px;
    }
  }
  &::after {
    content: '';
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: -8px;
    background-color: var(--color-yellow-second);
  }
  @media (min-width: 600px) {
    min-height: 150px;
    flex-direction: row;
    align-items: center;
    position: relative;
    .divImg-Description {
      position: relative;
      width: 60%;
      &::after {
        content: '';
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: var(--color-yellow-second);
      }
    }

    .btnContainer {
      flex-direction: column;
      width: 40%;
    }
  }

  @media (min-width: 1024px) {
    .divImg-Description {
      width: 37%;
    }
    .infos {
      display: flex;
      flex-direction: column;
      width: 30%;
      gap: 10px;
      position: relative;
    }
    .btnContainer {
      width: 33%;
      max-width: 250px;
      &::before {
        content: '';
        width: 5px;
        height: 80px;
        position: absolute;
        left: -15px;
        bottom: 10px;
        background-color: var(--color-yellow-second);
      }
    }
  }
`;
