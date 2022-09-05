import { ReactNode, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import ModalStyle from './style';
import { AiFillCloseSquare } from 'react-icons/ai';
import Button from '../Button';

interface IModalProps {
  children: ReactNode;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

//Fazer Desmontagem do Modal com useEffect

const Modal = ({ children, setIsOpenModal }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleCloseModal(event: { target: any }) {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpenModal(false);
      }
    }
    document.addEventListener('mousedown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [setIsOpenModal]);

  return (
    <ModalStyle>
      <div ref={modalRef} className='Modal'>
        <header className='headerModal'>
          <Button
            backGround='transparent'
            color='none'
            width={'30px'}
            onClick={() => setIsOpenModal(false)}
          >
            <AiFillCloseSquare size={28} />
          </Button>
        </header>
        {children}
      </div>
    </ModalStyle>
  );
};

export default Modal;
