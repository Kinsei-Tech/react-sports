import styled from 'styled-components';
const Teste = styled.div`
  .teste {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    gap: 1rem;
    .sectionForm {
      margin: 0;
    }
    fieldset {
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: wrap;
      label {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }
      .checkDivision {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

export default Teste;
