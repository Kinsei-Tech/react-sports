import { FormRegister } from '../../Components/Forms/FormRegister';
import Container from '../../Components/Forms/FormRegister/style';
import { ButtonRegisterHeader } from './style';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const navigate = useNavigate();

  const pageMotion = {
    initial: {opacity: 0, x: -50},
    animate: {opacity: 1, x: 0, transition: {duration: 0.3}},
    exit: {opacity: 0, x:0, transition: {duration: 0.3}}
  };

  return (
    <>
      <Container>
        <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion}>
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
        </motion.div>
      </Container>
    </>
  );
};
export default RegisterPage;
