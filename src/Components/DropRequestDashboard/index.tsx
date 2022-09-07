import { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { TeamsContext } from '../../Contexts/TeamsContext';
import { IElementsProps } from '../TeamCard';
import { Container } from './style';

interface IProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  elem: IElementsProps;
}

const DropRequestDashboard = ({ isVisible, setIsVisible, elem }: IProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { requestTeam } = useContext(TeamsContext);

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

  return (
    <Container ref={modalRef}>
      {elem.positionsSearchedFor?.map((position, index) => (
        <div key={index}>
          <button
            onClick={() => {
              requestTeam(5, 'grimm', position);
              setIsVisible(false);
            }}
          >
            {position}
          </button>
          <BsChevronDoubleRight />
        </div>
      ))}
    </Container>
  );
};
export default DropRequestDashboard;
