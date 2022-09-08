import styled from 'styled-components';

const FormStyle = styled.form`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  background-color: var(--gray-0);
  max-height: 68vh;

  h2 {
    text-align: center;

    color: var(--color-green-primary-hover);
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
  }

  article {
    /*     overflow-x: auto; */
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: var(--color-yellow-second);
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    }
    @media (min-width: 930px) {
      display: flex;
      flex-direction: row;

      section + section {
        padding-left: 10px;
      }

      section {
        width: 50%;

        input {
          margin-bottom: 8px;
        }

        fieldset {
          margin-left: 8px;
        }
      }
    }
  }
`;

export default FormStyle;
