import styled from "styled-components";

const Container = styled.div`
position: relative;
@media (min-width: 1200px) {
  background-color: var(--color-green-primary);
  min-height: 100vh;
  
  div.form_Imagem{
    display: block;
    position: absolute;
    top: 40px;
    left: 10px;
    z-index: 15; 
    height: 90vh;
    img{
      height: 100%;
    }
  }

  .form_Relative {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .container_FlexInput {
    display: flex;
  }

  div.div_White{
    background-color: var(--gray-1);
    height: 100vh;
    width: 100px;
    position: fixed;
    z-index: 10;
  }
 
  header.header_Register{
    display: flex;
    width: 0px;
    height: 0px;
    margin-bottom: 0px;
  }

  header.header_Register > img {
    display: none;
  }


  div.body_FormContainer {
    max-height: 903px;
    width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header_BtnBack {
    z-index: 30;
  }

  .div_Header_Container_FormStyle {
    position: absolute;
    z-index: 20;
    top: 30px;
    right: 200px;
  }

  input, select, fieldset,label {
    max-width: 300px;
  }

  .div_Header_Form{
    max-height: 40px;
  }

  .div_Container{
    padding: 16px;
  }
  
}

  background-color: var(--gray-0);
  border-top: 0px;

  .header_Register {
    background-color: var(--color-green-primary);
    margin-bottom: 3rem;
    height: 6rem;

    display: flex;
    justify-content: space-between;
    align-items: center;


  }

  .header_Register > h3 {
    color: var(--color-green-primary-hover);
    margin-right: 1rem;
  }

  .header_BtnBack{
    display: flex;
    color: var(--color-green-primary-hover);
    position: absolute;
    top: 30px;
    right: 15px;
    margin-right: 1rem;
  }
  
  .form_Imagem{
    display: none;
  }
  
  .div_Header_Container_FormStyle{
    padding: 1rem;
  }

}
.div_Header_Form {
  height: 60px;
  border-radius: 16px 16px 0px 0px;
  background-color: var(--color-green-primary-hover);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.div_Header_Form > button {
  background-color: var(--color-yellow-primary);
    border: none;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    margin-right: 1rem;
    font-size: 1rem;
}
  .div_FormStyle {
    border: 2px solid #93c335;

  .div_Container {
    padding: 0rem 1rem 0.2rem 1rem;
  }

  .div_White{
    display: none;
  }

  .fieldPlayer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    border: 2px solid var(--color-green-primary-hover);
    border-radius: 8px;

    background-color: var(--gray-0);

    &:focus {
      border-color: var(--color-green-primary-hover);
    }

    &:hover {
      border: 2px solid var(--color-green-primary-hover);
    }

    &::placeholder {
      color: var(--color-green-primary-hover);
    }
  }
  .div_InfoFieldset {
    display: flex;
    padding-left: 1rem;
    min-width: 50%;
    max-width: 50%;
    height: 30px;
    align-items: center;
    gap: 1rem;
  }

  legend {
    font-size: 12px;
  }

  

  .body_ContainerFieldSet {
    display: flex;
    flex-wrap: wrap;
  }

  label {
    font-size: 12px;
    gap: 5px;
  }
`;
export default Container;
