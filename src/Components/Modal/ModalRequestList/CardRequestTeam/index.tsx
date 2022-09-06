import Button from '../../../Button';
import { LiStyle } from './style';

const CardRequestTeam = () => {
  return (
    <LiStyle>
      <p>
        João Fucinho de Porco solicitou entrada no time Meia Boca como goleiro.
      </p>
      <div>
        <Button color='var(--gray-2)' backGround='var(--color-yellow-primary)'>
          Aceitar
        </Button>
        <Button color='var(--gray-0)' backGround='var(--error)'>
          Recusar
        </Button>
      </div>
    </LiStyle>
  );
};

export default CardRequestTeam;
