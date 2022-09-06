import { FaCheck } from 'react-icons/fa';
import { LiStyle } from './style';

const CardAcceptedDenied = () => {
  return (
    <LiStyle>
      <div>
        <p>Sua solicitaçãa para o grupo Pelada do Bairro foi aceita!</p>
        <span>Verifique sua lista de grupos.</span>
      </div>
      <FaCheck />
    </LiStyle>
  );
};

export default CardAcceptedDenied;
