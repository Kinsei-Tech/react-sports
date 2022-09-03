import Button from "../Button";
import InputStyle from "../Input/style";
import { StyledSearchInput } from "./styles";

export const SearchInput = () => (
  <StyledSearchInput>
    <InputStyle placeholder="Pesquisar..." />
    <Button color="#000000" backGround="#93C335">
      Buscar
    </Button>
  </StyledSearchInput>
);
