import { useContext, useEffect, useState } from 'react';
import Modal from '..';
import { AuthContext } from '../../../Contexts/AuthContext';
import { Container } from '../style';
import { FaEnvelope } from 'react-icons/fa';
import api from '../../../services/api';
import CardRequestTeam from './CardRequestTeam';
import CardAcceptedDenied from './CardAcceptedDenied';
import { HeaderModal } from './style';

const ModalRequestList = () => {
  const { setIsOpenModal } = useContext(AuthContext);
  const [teams, setTeams] = useState([]);

  const userId = localStorage.getItem('@id');

  useEffect(() => {
    userId &&
      api.get(`/teams?userId=${4}`).then((response) => setTeams(response.data));
  }, []);

  return (
    <Modal setIsOpenModal={setIsOpenModal}>
      <Container>
        <HeaderModal>
          <FaEnvelope />
          <h2>Lista de Solicitações</h2>
        </HeaderModal>

        <ul>
          <CardRequestTeam />
        </ul>
        <ul>
          <CardAcceptedDenied />
        </ul>
      </Container>
    </Modal>
  );
};

export default ModalRequestList;
