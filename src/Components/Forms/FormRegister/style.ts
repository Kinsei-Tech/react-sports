import styled from "styled-components";

const Container = styled.div`
position: relative;
@media (min-width: 1200px) {
  background-color: var(--color-green-primary);
  overflow-x: hidden;
  height: 100vh;
  
  div.form_Imagem{
    display: block;
    position: absolute;
    top: 50px;
    z-index: 15; 
    img{
      height: 903px;
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
    height: inherit;
    width: 200px;
    position: fixed;
    z-index: 10;
  }
  header.header_Register {
   display: none;
  }


  div.body_FormContainer {
    max-height: 903px;
    width: 650px;
    display: flex;
    flex-direction: column;
  }

  .Header_BtnBack {
    margin-right: 2rem
  }

  .div_Header_Container_FormStyle {
    position: absolute;
    z-index: 20;
    top: 55px;
    right: 20px;
    height: 100vh;
  
  }


  .divBtnRegister{
   
  }


  input, select, fieldset,label {
    max-width: 300px;
  }

  .div_Container {
    max-width: 300px;
  }

  .div_Header_Form{
    max-height: 40px;
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


  .Header_BtnBack{
    display: flex;
    color: var(--color-green-primary-hover);
    position: absolute;
    top: 30px;
    right: 15px;
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
    padding: 1rem;
  }

  .div_ContainerFieldset {
    display: flex;
    flex-direction: column;
  }

  .div_White{
    display: none;
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

  .fieldPlayer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    border: 2px solid var(--color-green-primary);
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

  legend {
    font-size: 12px;
  }

  .divBtnRegister {
    padding-top: 1rem;
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
