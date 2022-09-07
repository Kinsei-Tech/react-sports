import { ReactNode, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import ModalStyle from './style';
import { AiOutlineClose } from 'react-icons/ai';

interface IModalProps {
  children: ReactNode;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  expandedModal?: boolean;
}

//Fazer Desmontagem do Modal com useEffect

const Modal = ({ children, setIsOpenModal, expandedModal }: IModalProps) => {
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
    <ModalStyle expandedModal={expandedModal}>
      <div ref={modalRef} className='Modal global-modal-style'>
        <header className='headerModal'>
          <button onClick={() => setIsOpenModal(false)}>
            <AiOutlineClose size={18} />
          </button>
        </header>
        {children}
      </div>
    </ModalStyle>
  );
};

export default Modal;
