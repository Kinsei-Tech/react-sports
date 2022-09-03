import { FormRegister } from '../../Components/Forms/FormRegister';
import Container from '../../Components/Forms/FormRegister/style';
import { ButtonRegisterHeader } from './style';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <header className='header_Register'>
          <img src='./LogoHeaderRegister.png' alt='Logo' />
          <div className='header_BtnBack'>
            <ButtonRegisterHeader onClick={() => navigate('/')}>
              Voltar
            </ButtonRegisterHeader>
            <img src='./HeaderRegister.png' alt='Exit' />
          </div>
        </header>
        <div className='div_White'></div>
        <FormRegister />
      </Container>
    </>
  );
};
export default RegisterPage;
