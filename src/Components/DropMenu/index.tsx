import { FaUser } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Container, FloatMenu } from "./styles";

export const DropMenuProfile = () => (
  <FloatMenu>
    <Container>
      <button>
        Sair <AiOutlineDoubleRight />
      </button>
      <hr />
      <button>
        Perfil <FaUser />
      </button>
    </Container>
  </FloatMenu>
);
