import styled from 'styled-components';

export const ContainerEdit = styled.section`
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

  div {
    fieldset {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }

  @media (min-width: 930px) {
    section + section {
      margin-left: 30px;
    }
  }
`;
