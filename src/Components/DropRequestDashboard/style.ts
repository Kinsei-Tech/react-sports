import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  background-color: var(--gray-0);
  border: 2px solid rgba(110, 148, 35, 0.72);
  border-radius: 8px;

  gap: 2px;
  width: 100%;

  button {
    background: transparent;
    border: none;
    border-radius: 5px;
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5%;
    background-color: var(--gray-0);
    svg {
      color: var(--color-green-primary);
    }
    &:hover {
      background-color: var(--color-green-primary-hover);
      color: var(--gray-0);
    }
  }

  @media (min-width: 930px) {
    position: absolute;
    right: -90px;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0px;

    button {
      margin: 0px;
    }

    svg {
      margin-right: 8px;
    }

    .dropDown {
      /* width: 110px; */

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      padding: 0px;
    }
  }
`;
