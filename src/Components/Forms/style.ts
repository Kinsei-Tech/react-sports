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
  max-height: 60vh;

  h1 {
    color: green;
    font-size: 1rem;
  }
`;

export default FormStyle;
