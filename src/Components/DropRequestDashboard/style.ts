import styled from 'styled-components';

export const Container = styled.nav`
  background-color: var(--gray-0);
  border: 2px solid rgba(110, 148, 35, 0.72);
  border-radius: 8px;
  margin-left: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    background: transparent;
    border: none;
    margin-left: 1rem;
  }

  svg {
    color: var(--color-green-primary);
    margin-right: -3rem;
  }

  @media (min-width: 930px) {
    position: absolute;
    top: 59px;
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
      width: 110px;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      padding: 0px;
    }
  }
`;
