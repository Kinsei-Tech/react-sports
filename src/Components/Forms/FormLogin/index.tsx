import Button from "../../Button";
import Input from "../../Input";

import FormStyle from "../style";

const FormLogin = () => {
  return (
    <>
      <FormStyle>
        <h1>Login</h1>
        <Input placeholder="Digite seu email" label="Email" autoFocus={true} />
        <Input placeholder="Digite sua senha" label="Senha" />
        <Button backGround={"#93C335"} colorHover={"#6E9423"} color={"#D9D9D9"}>
          Entrar
        </Button>
      </FormStyle>
      <div className="footerModal">
        <h5>Ainda não possui cadastro?</h5>
        <Button
          backGround={"#F2CC50"}
          color={"#202020"}
          colorHover={"#F0C126"}
          onClick={() => console.log("teste")}
        >
          Cadastrar
        </Button>
      </div>
    </>
  );
};

export default FormLogin;
