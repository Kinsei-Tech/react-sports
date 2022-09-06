import { FaUser } from 'react-icons/fa';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Container, FloatMenu } from './styles';
import { useNavigate } from 'react-router-dom';
import { BaseSyntheticEvent } from 'react';
import { toast } from 'react-hot-toast';

interface IDropMenuProfile {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  dashboard?: boolean;
}

export const DropMenuProfile = ({
  setIsVisible,
  dashboard,
}: IDropMenuProfile) => {
  const navigate = useNavigate();

  const handleCloseDropMenu = (event: BaseSyntheticEvent) => {
    if (event.target.id !== 'float-menu') {
      setIsVisible(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
    toast.success('Deslogad@! Até breve!');
  };

  return dashboard ? (
    <FloatMenu id='float-menu' onClick={handleCloseDropMenu}>
      <Container>
        <button onClick={logout}>
          Sair <AiOutlineDoubleRight />
        </button>
        <hr />
        <button onClick={() => navigate('/profile')}>
          Perfil <FaUser />
        </button>
      </Container>
    </FloatMenu>
  ) : (
    <FloatMenu id='float-menu' onClick={handleCloseDropMenu}>
      <Container>
        <button onClick={logout}>
          Sair <AiOutlineDoubleRight />
        </button>
        <hr />
        <button onClick={() => navigate('/dashboard')}>
          Voltar <FaUser />
        </button>
      </Container>
    </FloatMenu>
  );
};
