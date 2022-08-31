import { InputContainer, StyledHeader, UserImage } from "./styles";
import Logo from "../../Images/LogoWithBall.svg";
import ProfilePicture from "../../Images/example-profile-picture.svg";
import { AiFillCaretDown } from "react-icons/ai";
import { SearchInput } from "../SearchInput";
import { DropMenuProfile } from "../DropMenu";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleCloseModal(event: { target: any }) {
      if (!modalRef.current?.contains(event.target)) {
        setIsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [setIsVisible]);

  return (
    <StyledHeader>
      <div className="simple-header">
        <img src={Logo} alt="brand logo" />
        <section>
          <UserImage>
            <img src={ProfilePicture} alt="user profile img" />
          </UserImage>
          <button onClick={() => setIsVisible(true)}>
            <div className="icon">
              <AiFillCaretDown />
            </div>
          </button>
          {isVisible && <DropMenuProfile />}
        </section>
      </div>
      <InputContainer>
        <SearchInput />
      </InputContainer>
    </StyledHeader>
  );
};
