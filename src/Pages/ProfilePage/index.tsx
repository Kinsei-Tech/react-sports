import { Header } from '../../Components/Header';
import { FaAngleDoubleRight, FaEnvelope } from 'react-icons/fa';
import ImgProfile from '../../Images/ImagemPerfil.svg';
import {
  ButtonBox,
  Contacts,
  ContactsBox,
  DivFlex,
  DivNetworks,
  MainStyled,
  PhysicalDescriptions,
  Pipe,
  SectionContactNetworks,
  SectionGroupList,
  SectionUserAddress,
  SectionUserDescription,
  UlTeamCard,
} from './style';
import Button from '../../Components/Button';
import Card from '../../Components/TeamCard';

const ProfilePage = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionContactNetworks>
          <ContactsBox>
            <Contacts>
              <div className='img-user'>
                <figure>
                  <img src={ImgProfile} alt='Usuario' />
                </figure>
                <div className='box-notification'>
                  <FaEnvelope className='svg-envelope-style' />
                  <span>2</span>
                </div>
              </div>
              <div className='user-contacts'>
                <span className='user-name'>Kenzinho</span>
                <span>kenzinho@email.com</span>
                <span>(ddd)99999-9999</span>
              </div>
            </Contacts>
          </ContactsBox>
          <DivNetworks>
            <h3>Redes:</h3>
            <div>
              <a href='#'>
                <span>Facebook</span>
                <FaAngleDoubleRight className='svg-doublerigth-style' />
              </a>
              <a href='#'>
                <span>Facebook</span>
                <FaAngleDoubleRight className='svg-doublerigth-style' />
              </a>
              <a href='#'>
                <span>Facebook</span>
                <FaAngleDoubleRight className='svg-doublerigth-style' />
              </a>
              <a href='#'>
                <span>Facebook</span>
                <FaAngleDoubleRight className='svg-doublerigth-style' />
              </a>
            </div>
          </DivNetworks>
          <ButtonBox>
            <Button
              color='var(--gray-2)'
              backGround='var(--color-green-primary)'
              height={'21px'}
              width={'84px'}
              colorHover='var(--color-green-primary-hover)'
            >
              Editar Perfil
            </Button>
            <Button
              color='var(--gray-2)'
              backGround='var(--color-green-primary)'
              height={'21px'}
              width={'84px'}
              colorHover='var(--color-green-primary-hover)'
            >
              Add Redes
            </Button>
          </ButtonBox>
        </SectionContactNetworks>
        <DivFlex>
          <SectionUserDescription>
            <PhysicalDescriptions>
              <p>
                Altura:
                <span>1,72</span>
              </p>
              <Pipe>|</Pipe>
              <p>
                Peso:
                <span>_</span>
              </p>
              <Pipe>|</Pipe>
              <p>
                Idade:
                <span>21</span>
              </p>
            </PhysicalDescriptions>
            <p>Não pratica exercícios regularmente</p>
            <p>
              Posições:
              <span>Goleiro</span>
            </p>
          </SectionUserDescription>
          <SectionUserAddress>
            <p>
              Estado:
              <span>Alagoas</span>
            </p>
            <p>
              CEP:
              <span>29999999</span>
            </p>
            <p>
              Cidade:
              <span>Maceió</span>
            </p>
            <p>
              Bairro:
              <span>Pajuçara</span>
            </p>
          </SectionUserAddress>
        </DivFlex>
        <SectionGroupList>
          <span className='section-title'>Grupos:</span>
          <UlTeamCard>
            <Card />
            <Card />
          </UlTeamCard>
        </SectionGroupList>
      </MainStyled>
    </>
  );
};

export default ProfilePage;