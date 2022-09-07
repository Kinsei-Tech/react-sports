import { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { AuthContext } from '../../Contexts/AuthContext';
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
  const { user } = useContext(AuthContext);

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
  console.log('teste', user);
  return (
    <Container ref={modalRef}>
      {elem.positionsSearchedFor?.map((position, index) => (
        <div key={index}>
          <button
            onClick={() => {
              requestTeam(user?.id, user?.name, position, elem.id);
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
