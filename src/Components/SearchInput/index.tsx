import Button from '../Button';
import InputStyle from '../Input/style';
import { StyledSearchInput } from './styles';

export const SearchInput = () => (
  <StyledSearchInput>
    <InputStyle placeholder='Pesquisar...' />
    <Button color='green_black'>Buscar</Button>
  </StyledSearchInput>
);
