import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: 20px 9vw 20px 9vw;

  background: linear-gradient(
    180deg,
    var(--color-green-primary) 39.06%,
    var(--color-green-primary-hover) 100%
  );

  width: 100%;
  height: 185px;

  .simple-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    > img {
      height: 13.5vw;
      max-height: 170px;
      min-height: 70px;
    }
  }

  section {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    > button {
      display: flex;
      align-items: center;

      justify-content: center;

      background-color: var(--color-green-primary);

      border: 1px solid var(--color-green-primary-hover);
      border-radius: 8px;

      width: 6vw;
      min-width: 80px;

      margin-top: 5px;

      transition: 0.5s;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--color-green-primary-hover);
      }

      &:hover,
      &:focus {
        cursor: pointer;
        transition: 0.5s;
        background-color: var(--color-green-primary-hover);

        .icon {
          color: var(--color-green-primary);
        }
      }
    }
  }
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;

  border: 2.5px solid var(--color-yellow-second);
  border-radius: 100%;

  height: 6vw;
  width: 6vw;

  min-height: 80px;
  min-width: 80px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  margin-top: 2vw;

  button {
    height: 35px;

    width: 18vw;
    min-width: 85px;

    border-radius: 0px 8px 8px 0px;
  }

  input {
    height: 35px;

    width: 30vw;
    min-width: 200px;

    border-radius: 8px 0px 0px 8px;
  }

  @media (min-width: 930px) {
    display: none;
  }
`;
