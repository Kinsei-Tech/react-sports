import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import api from '../../services/api';
import { Container, FloatMenu } from './style';

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

  const myArray = ['Ala Esquerda', 'Pivô'];

  return (
    <FloatMenu>
      <Container ref={modalRef}>
        {myArray?.map((elem, index) => {
          return (
            <button
              onClick={() => {
                console.log('oi');
                setIsVisible(false);
              }}
              key={index}
            >
              {elem}
            </button>
          );
        })}
      </Container>
    </FloatMenu>
  );
};
export default DropRequestDashboard;
