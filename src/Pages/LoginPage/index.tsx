import { useEffect, useRef, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

import Button from '../../Components/Button';
import ContainerLoginPage from './style';
import Logo from '../../Images/LogoWithBall.svg';
import player from '../../Images/Jogador.svg';
import imgCarrosel from '../../Images/imgCarrosel.svg';
import imgCarrosel2 from '../../Images/imgCarrosel2.svg';
import Modal from '../../Components/Modal';
import FormLogin from '../../Components/Forms/FormLogin';
import FooterModal from '../../Components/Modal/FooterModal';
import { useNavigate } from 'react-router-dom';

const pageMotion = {
  initial: {opacity: 0, x: -50},
  animate: {opacity: 1, x: 0, transition: {duration: 0.3}},
  exit: {opacity: 0, x:0, transition: {duration: 0.3  }}
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [changecard, setchangecard] = useState(true);
  const arrayCorrosel = [
    {
      title: 'Encontre seu time !!',
      description: 'Busque por grupos em sua região.',
      img: imgCarrosel,
      id: 'EnBusEl',
    },
    {
      title: 'Forme seu Time!!',
      description: 'Encontre jogadores pare completar seu grupo na sua região.',
      img: imgCarrosel2,
      id: 'FoEncEll2',
    },
  ];
  const cardRef = useRef<HTMLUListElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (cardRef.current !== null) {
        cardRef.current.scrollLeft += cardRef.current.offsetWidth;
      }
      setTimeout(() => {
        setchangecard(!changecard);
      }, 5000);
    }, 5000);
    if (cardRef.current !== null) {
      cardRef.current.scrollLeft -= cardRef.current.offsetWidth;
    }
  }, [changecard]);
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <ContainerLoginPage>
        {isOpenModal && (
          <Modal setIsOpenModal={setIsOpenModal}>
            <FormLogin></FormLogin>
            <FooterModal>
              <h5>Ainda não possui cadastro?</h5>
              <Button
                backGround={'#F2CC50'}
                color={'#202020'}
                colorHover={'#F0C126'}
                onClick={() => navigate('/register', { replace: false })}
              >
                Cadastrar
              </Button>
            </FooterModal>
          </Modal>
        )}
        <header className='headerPageLogin'>
          <div>
            <img src={Logo} alt='' className='logoMobile' />
          </div>
          <div className='divLogin'>
            <BsFillPersonFill size={24} />
            <Button
              backGround='transparent'
              color='var(--color-green-primary-hover)'
              onClick={() => setIsOpenModal(true)}
            >
              Login
            </Button>
          </div>
        </header>
        <div className='mainPage'>
          <img src={Logo} alt='' className='logoDesktop' />
          <img src={player} alt={'Jogador'} className='Player' />
          <ul ref={cardRef}>
            {arrayCorrosel.map(({ title, description, img, id }) => (
              <li key={id}>
                <div>
                  <h3>{title}</h3>
                  <h4>{description}</h4>
                </div>
                <img src={img} alt='' className='ImgCarrosel' />
              </li>
            ))}
          </ul>
        </div>
        <footer className='footerLoginPage'>
          <Button backGround='var(--color-green-primary)' color='transparent'>
            <FaFacebookF size={24} />
          </Button>
          <Button backGround='var(--color-green-primary)' color='transparent'>
            <BsTwitter size={24} />
          </Button>
          <Button backGround='var(--color-green-primary)' color='transparent'>
            <BsInstagram size={24} />
          </Button>
        </footer>
      </ContainerLoginPage>
    </motion.div>
  );
};

export default LoginPage;
