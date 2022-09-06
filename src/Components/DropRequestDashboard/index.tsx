import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import api from '../../services/api';
import { Container } from './style';

interface IProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const DropRequestDashboard = ({ isVisible, setIsVisible }: IProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  // const [positions, setPositions] = useState([]);
  // const positionsSearchedFor = api.get('/teams').then((response) => {
  //   setPositions(response.data.positionsSearchedFor);
  //   console.log(response);
  // });

  useEffect(() => {
    function handleCloseModal(event: { target: any }) {
      if (!modalRef.current?.contains(event.target)) {
        setIsVisible(false);
      }
    }
    document.addEventListener('mousedown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [setIsVisible]);

  const myArray = ['Goleiro', 'Fixo', 'Ala Esquerda', 'Ala Direita', 'Pivô'];

  return (
    <Container ref={modalRef}>
      {myArray?.map((elem, index) => {
        return (
          <div className='dropDown' key={index}>
            <button
              onClick={() => {
                console.log('oi');
                setIsVisible(false);
              }}
            >
              {elem}
            </button>
            <BsChevronDoubleRight />
          </div>
        );
      })}
    </Container>
  );
};
export default DropRequestDashboard;
