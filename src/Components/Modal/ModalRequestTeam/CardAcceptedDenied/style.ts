import styled from 'styled-components';

export const LiStyle = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 20px;
    align-self: center;
    height: 2.5px;
    width: 256px;
    background-color: var(--color-yellow-second);
    @media (min-width: 600px) {
      right: 23px;
      width: 320px;
    }
  }
  div {
    width: 80%;
    gap: 0;
    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: var(--gray-2);
      @media (min-width: 600px) {
        font-size: 19px;
        line-height: 23px;
      }
    }
    span {
      font-weight: 400;
      font-size: 10px;
      line-height: 10px;
      color: var(--gray-2);
      @media (min-width: 600px) {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
  svg {
    color: var(--success);
    font-size: 22px;
    @media (min-width: 600px) {
      font-size: 26px;
    }
  }
`;
