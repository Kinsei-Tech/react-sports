import { useContext } from 'react';
import Modal from '..';
import { AuthContext } from '../../../Contexts/AuthContext';
import { Container } from '../style';

const ModalTeamDetails = () => {
  const { setIsOpenModal } = useContext(AuthContext);

  return (
    <Modal expandedModal setIsOpenModal={setIsOpenModal}>
      <Container>
        <h2>Detalhes do Time</h2>
      </Container>
    </Modal>
  );
};

export default ModalTeamDetails;
