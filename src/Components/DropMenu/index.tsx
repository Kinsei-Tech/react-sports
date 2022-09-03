import { FaUser } from 'react-icons/fa';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Container, FloatMenu } from './styles';
import Button from '../Button';

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
    <Button color='green_white'> Teste</Button>
  </FloatMenu>
);
