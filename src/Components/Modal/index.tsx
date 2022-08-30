import { ReactNode } from "react";
import ModalStyle from "./style";
import { AiFillCloseSquare } from "react-icons/ai";
import Button from "../Button";

interface IModalProps {
  children: ReactNode;
}

//Fazer Desmontagem do Modal com useEffect

const Modal = ({ children }: IModalProps) => {
  return (
    <ModalStyle>
      <div>
        <header>
          <Button backGround="transparent" color="none" width={"30px"}>
            <AiFillCloseSquare size={28} />
          </Button>
        </header>
        {children}
      </div>
    </ModalStyle>
  );
};

export default Modal;
