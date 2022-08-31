import Button from "../../Components/Button";
import ContainerLoginPage from "./style";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

import Logo from "../../Images/LOGO.svg";
import player from "../../Images/Jogador.png";
import imgCarrosel from "../../Images/imgCarrosel.svg";
import imgCarrosel2 from "../../Images/imgCarrosel2.svg";
import { useEffect, useRef, useState } from "react";
import Modal from "../../Components/Modal";
import FormLogin from "../../Components/Forms/FormLogin";

const LoginPage = () => {
  const [changecard, setchangecard] = useState(true);
  const arrayCorrosel = [
    {
      title: "Encontre seu time !!",
      description: "Busque por grupos em sua região.",
      img: imgCarrosel,
      id: "EnBusEl",
    },
    {
      title: "Forme seu Time!!",
      description: "Encontre jogadores pare completar seu grupo na sua região.",
      img: imgCarrosel2,
      id: "FoEncEll2",
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
    <ContainerLoginPage>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <FormLogin></FormLogin>
        </Modal>
      )}
      <header className="headerPageLogin">
        <div>
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="divLogin">
          <BsFillPersonFill size={24} />
          <Button
            backGround="transparent"
            color="var(--color-green-primary-hover)"
            onClick={() => setIsOpenModal(true)}
          >
            Login
          </Button>
        </div>
      </header>
      <img src={player} alt={"Jogador"} className="Player" />
      <ul ref={cardRef}>
        {arrayCorrosel.map(({ title, description, img, id }) => (
          <li key={id}>
            <div>
              <h3>{title}</h3>
              <h4>{description}</h4>
            </div>
            <img src={img} alt="" className="ImgCarrosel" />
          </li>
        ))}
      </ul>
      <footer>
        <Button backGround="var(--color-green-primary)" color="transparent">
          <FaFacebookF size={24} />
        </Button>
        <Button backGround="var(--color-green-primary)" color="transparent">
          <BsTwitter size={24} />
        </Button>
        <Button backGround="var(--color-green-primary)" color="transparent">
          <BsInstagram size={24} />
        </Button>
      </footer>
    </ContainerLoginPage>
  );
};

export default LoginPage;
