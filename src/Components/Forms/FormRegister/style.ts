import styled from 'styled-components';

const Container = styled.div`
  position: relative;

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

  .header_BtnBack {
    display: flex;
    color: var(--color-green-primary-hover);
    position: absolute;
    top: 30px;
    right: 15px;
    margin-right: 1rem;
  }

  .form_Imagem {
    display: none;
  }

  .div_Header_Container_FormStyle {
    margin: 0 auto;
    width: 90%;
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
  form {
    border: 2px solid #93c335;
    .div_FormStyle {
      display: flex;
      flex-direction: column;
      width: 100%;
      overflow-y: scroll;
      .sectionForm {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
        label {
        }

        span {
          align-self: flex-start;
          text-align: initial;
        }
      }

      fieldset {
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-wrap: wrap;
        padding-left: 5%;
        border: 2px solid var(--color-green-primary-hover);
        border-radius: 8px;
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
          width: 50%;
          gap: 20px;
        }
      }
    }
    button {
      max-width: 300px;
      min-height: 40px;
      align-self: center;
    }
  }

  @media (min-width: 768px) {
    .div_Header_Container_FormStyle {
      max-width: 640px;
      form {
        max-height: 77vh;
        .div_FormStyle {
          flex-direction: row;
          gap: 20px;
          .sectionForm {
            gap: 5px;
            width: 50%;
            display: flex;
            justify-content: space-between;
            label {
              input {
                height: 40px;
              }
              select {
                height: 40px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .div_Header_Container_FormStyle {
      form {
        .div_FormStyle {
          .sectionForm {
            gap: 5px;
            width: 50%;
            display: flex;
            justify-content: space-between;
            label {
              input {
                max-width: none;
              }
              select {
                height: 40px;
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    background-color: var(--color-green-primary);
    min-height: 100vh;

    div.form_Imagem {
      display: block;
      position: absolute;
      top: 40px;
      left: 10px;
      z-index: 15;
      height: 90vh;
      img {
        height: 100%;
      }
    }

    .form_Relative {
      position: relative;
      width: 100%;
      height: 100vh;
    }

    div.div_White {
      background-color: var(--gray-1);
      height: 100vh;
      width: 100px;
      position: fixed;
      z-index: 10;
    }

    header.header_Register {
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
      top: 80px;
      right: 20px;
      form {
        .div_FormStyle {
          &::-webkit-scrollbar {
            display: none;
          }
        }

        .sectionForm {
          fieldset {
            .checkDivision {
              gap: 0px;
            }
          }
        }
      }

      .div_Header_Form {
        max-height: 40px;
      }

      .div_InputWidth {
        gap: 12px;
        width: 50%;
      }
    }
  }
`;
export default Container;
