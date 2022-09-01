import { FormRegister } from "../../Components/Forms/FormRegister";
import Container from "../../Components/Forms/FormRegister/style";

const RegisterPage = () => {
  return (
    <>
      <Container>
        <div className="Header_BtnBack">
          <h3>Voltar</h3>
          <img src="./HeaderRegister.png" alt="Exit" />
        </div>
        <header className="header_Register">
          <img src="./LogoHeaderRegister.png" alt="Logo" />
        </header>

        <div className="div_White"></div>
      <FormRegister />;
      </Container>
    </>
  );
};
export default RegisterPage;
