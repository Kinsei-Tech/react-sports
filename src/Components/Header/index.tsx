import { InputContainer, StyledHeader, UserImage } from './styles';
import Logo from '../../Images/LogoWithBall.svg';
import ProfilePicture from '../../Images/example-profile-picture.svg';
import { AiFillCaretDown } from 'react-icons/ai';
import { SearchInput } from '../SearchInput';
import { DropMenuProfile } from '../DropMenu';
import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [dashboard, setDashboard] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setDashboard(true);
    } else {
      setDashboard(false);
    }
  }, [location]);

  const handleCloseDropMenu = (event: BaseSyntheticEvent) => {
    if (event.target.id !== 'section') {
      setIsVisible(false);
    }
  }

  return (
    <StyledHeader>
      <div className='simple-header' onMouseLeave={handleCloseDropMenu}>
        <img src={Logo} alt='brand logo' />
        <section>
          <UserImage>
            <img src={ProfilePicture} alt='user profile img' />
          </UserImage>
          <button onClick={() => setIsVisible(true)}>
            <div className='icon'>
              <AiFillCaretDown />
            </div>
          </button>
          {isVisible &&
            (dashboard ? (
              <DropMenuProfile dashboard setIsVisible={setIsVisible} />
            ) : (
              <DropMenuProfile setIsVisible={setIsVisible} />
            ))}
        </section>
      </div>
      <InputContainer>
        <SearchInput />
      </InputContainer>
    </StyledHeader>
  );
};
