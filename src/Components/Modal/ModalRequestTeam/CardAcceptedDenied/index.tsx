import { FaCheck } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { LiStyle } from './style';

interface ICardAcceptedDeniedProps {
  type?: string;
  name: string;
}

const CardAcceptedDenied = ({ type, name }: ICardAcceptedDeniedProps) => {
  return (
    <>
      {type === 'Accepted' ? (
        <LiStyle>
          <div>
            <p>Sua solicitação para o grupo {name} foi aceita!</p>
            <span>Entre em contato com o time para mas informações.</span>
          </div>
          <FaCheck />
        </LiStyle>
      ) : (
        <LiStyle>
          <div>
            <p>Sua solicitação para o grupo {name} foi recusada!</p>
            <span>Entre em contato com o time para mas informações.</span>
          </div>
          <GrClose />
        </LiStyle>
      )}
    </>
  );
};

export default CardAcceptedDenied;
