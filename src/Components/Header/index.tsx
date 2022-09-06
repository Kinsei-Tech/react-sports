import { InputContainer, StyledHeader, UserImage } from './styles';
import Logo from '../../Images/LogoWithBall.svg';
import ProfilePicture from '../../Images/example-profile-picture.svg';
import { AiFillCaretDown } from 'react-icons/ai';
import { SearchInput } from '../SearchInput';
import { DropMenuProfile } from '../DropMenu';
import { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StyledHeader>
      <div className='simple-header'>
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
          {isVisible && <DropMenuProfile setIsVisible={setIsVisible} />}
        </section>
      </div>
      <InputContainer>
        <SearchInput />
      </InputContainer>
    </StyledHeader>
  );
};
