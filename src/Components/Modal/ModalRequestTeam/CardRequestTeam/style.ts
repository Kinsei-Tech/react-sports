import styled from 'styled-components';

export const LiStyle = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
  position: relative;
  gap: 12px;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  &::after {
    content: '';
    align-self: center;
    height: 2.5px;
    width: 256px;
    margin-top: 13px;
    background-color: var(--color-yellow-second);
    @media (min-width: 600px) {
      width: 320px;
      position: absolute;
      bottom: 0;
      right: 20px;
    }
  }
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--gray-2);
    @media (min-width: 600px) {
      margin-bottom: 13px;
      font-size: 19px;
      line-height: 23px;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 7px;
    margin-bottom: 8px;
    margin-right: 6px;
    @media (min-width: 600px) {
      flex-direction: column;
    }
    button {
      width: 65px;
      height: 23px;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      @media (min-width: 600px) {
        width: 116px;
        height: 33px;
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;
