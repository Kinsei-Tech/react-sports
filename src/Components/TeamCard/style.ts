import styled from 'styled-components';

export const TeamCard = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-bottom: 2px solid var(--color-yellow-primary);
  margin: 0 auto;
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

  img {
    width: 20vw;
    max-width: 150px;
    align-self: center;
    border: 2px solid var(--color-yellow-primary);
    border-radius: 50%;
    margin-bottom: 15px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;

  }

  h2 {
    margin: 8px 0 0 15px;
    align-self: start;
    font-size: 18px;
  }

  p {
    margin: 8px 0 8px 15px;
    font-weight: 400;
    text-align: start;
    font-size: 10px;
  }

  .infos {
    display: none;
  }

  .btnContainer {
    width: 100%;
    flex-direction: row;
    margin-bottom: 10px;


    @media (min-width: 930px) {
      position: relative;


  }

  .btnContainer > Button {
    width: 40%;
    max-width: 93px;
  }

  &:hover {
    background-color: #dae3c8;
  }

  @media (min-width: 930px) {
    width: 70%;
    flex-direction: row;
    justify-content: space-between;

    div {
      width: 30%;
      padding: 10px;
    }

    .infos {
      display: flex;
    }

    .btnContainer {
      flex-direction: column;
      width: 20%;
      justify-content: center;
      gap: 20px;
    }

    .btnContainer > Button {
      width: 162px;
      cursor: pointer;
    }
  }
`;

export const SectionImagem = styled.section`
  width: 80px;
  height: 80px;
  margin: 20px 12px 25px 15px;
  position: relative;

  @media (min-width: 600px) {
    width: 140px;
    height: 140px;
  }
  figure {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2.5px solid var(--color-yellow-second);
      object-fit: cover;
    }
  }
  div.box-notification {
    position: absolute;
    width: 25px;
    height: 25px;
    display: inline-block;
    right: 5px;
    bottom: -10px;
    @media (min-width: 600px) {
      width: 35px;
      height: 35px;
      right: 6px;
      bottom: 5px;
    }
    svg.svg-envelope-style {
      color: var(--color-yellow-second);
      position: absolute;
      font-size: 22px;
      z-index: 2;
      @media (min-width: 600px) {
        font-size: 28px;
      }
    }
    span {
      position: absolute;
      z-index: 4;
      bottom: 0;
      right: 0;
      font-weight: 600;
      font-size: 12px;
      text-align: center;
      color: var(--error);
      @media (min-width: 600px) {
        border: 2px solid var(--error);
        border-radius: 50%;
        width: 18px;
        height: 18px;
        bottom: -10px;
        right: -10px;
      }
    }
  }
`;
