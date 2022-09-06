import styled from 'styled-components';

const Container = styled.div`
  .Modal {
    max-width: 613px;
    form {
      label {
        display: flex;
        text-align: start;
        flex-direction: column;
        width: 100%;
        span {
          margin-left: 15px;
        }
        select {
          height: 30px;
          width: 100%;
          padding-left: 10px;
          border: 2px solid var(--color-green-primary-hover);
          border-radius: 8px;
          background-color: var(--gray-0);
          color: var(--color-green-primary-hover);

          &:focus {
            border-color: var(--color-green-primary-hover);
          }

          &:hover {
            border: 2px solid var(--color-green-primary-hover);
          }
        }
      }
      .teste {
        width: 100%;
        max-width: none;
        margin: 0;
        display: flex;
        flex-direction: column;
        overflow-y: auto;

        .sectionForm {
          margin: 0;
          max-width: none;
        }
        fieldset {
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 0 5% 0 5%;
          label {
            width: auto;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
          }
          .checkDivision {
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 50%;
          }
        }
      }
    }
  }

  @media (min-width: 600px) {
    .Modal {
      form {
        .teste {
          flex-direction: row;
          gap: 1rem;
          .sectionForm {
            width: 50%;
            fieldSet {
              border-radius: 8px;
              border: 2px solid var(--color-green-primary-hover);
            }
          }
        }
      }
    }
  }
`;

export default Container;
