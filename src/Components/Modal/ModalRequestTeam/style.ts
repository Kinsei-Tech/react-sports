import styled from 'styled-components';

export const HeaderModal = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 14px;
  &::after {
    content: '';
    align-self: center;
    height: 2.5px;
    width: 256px;
    background-color: var(--color-yellow-second);
  }
  svg {
    position: absolute;
    font-size: 48px;
    top: -30px;
    color: var(--color-yellow-second);
  }
  h2 {
    margin-left: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    @media (min-width: 600px) {
      font-size: 26px;
      line-height: 31px;
    }
  }
`;
