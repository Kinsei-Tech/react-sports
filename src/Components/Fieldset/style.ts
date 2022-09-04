import styled from 'styled-components';

export const FieldsetStyle = styled.fieldset`
  padding: 15px;

  border: 2px solid var(--color-green-primary-hover);
  border-radius: 8px;

  color: var(--gray-2);

  legend {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    padding: 5px;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    list-style: none;

    max-height: 120px;

    li {
      text-align: left;
      padding: 8px;

      label {
        span {
          margin-left: 4px;

          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
  }
`;
