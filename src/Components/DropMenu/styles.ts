import styled from "styled-components";

export const FloatMenu = styled.div`
  float: left;
  z-index: 9999;
  position: relative;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: var(--gray-0);
  border: 2px solid rgba(110, 148, 35, 0.72);
  border-radius: 8px;
  position: absolute;
  width: 96px;
  height: 80px;

  hr {
    width: 60px;
    height: 0px;

    border: 1px solid var(--color-yellow-second);

    margin: 6px 0px 6px 0px;
  }

  button {
    display: flex;

    justify-content: space-between;
    align-items: center;

    width: 70%;

    border: none;
    background-color: var(--gray-0);

    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    transition: 0.5s;

  }
`;
