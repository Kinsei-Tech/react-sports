import styled from 'styled-components';

const FormStyle = styled.form`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 10px;
  background-color: var(--gray-0);
  border-radius: 0 0 16px 16px;

  h1 {
    color: green;
    font-size: 1rem;
  }

  @media (min-width: 930px) {
    article {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      max-height: 98vh;

      label {
        margin: 10px;
      }

      fieldset {
        margin-left: 10px;
      }
    }
  }
`;

export default FormStyle;
