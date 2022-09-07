import styled from 'styled-components';

export const MainStyled = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 925px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionContactNetworks = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  &::after {
    content: '';
    align-self: center;
    height: 2.5px;
    width: 256px;
    margin-top: 11px;
    background-color: var(--color-yellow-second);
    @media (min-width: 600px) {
      position: absolute;
      bottom: 0;
      right: 55px;
      width: 800px;
    }
  }
`;
export const ContactsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  div.img-user {
    width: 80px;
    height: 80px;
    margin: 20px 12px 25px 15px;
    position: relative;
    @media (min-width: 600px) {
      width: 140px;
      height: 140px;
    }
    figure {
      width: inherit;
      height: inherit;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2.5px solid var(--color-yellow-second);
        object-fit: cover;
      }
    }
  }
  div.box-notification {
    position: absolute;
    width: 25px;
    height: 25px;
    display: inline-block;
    right: 5px;
    bottom: -10px;

    @media (min-width: 600px) {
      right: 4px;
      bottom: 5px;
    }
    svg.svg-envelope-style {
      color: var(--color-yellow-second);
      position: absolute;
      font-size: 22px;
      z-index: 2;
      @media (min-width: 600px) {
        font-size: 28px;
      }
    }
    span {
      position: absolute;
      z-index: 4;
      bottom: 0;
      right: 0;
      font-weight: 600;
      font-size: 12px;
      text-align: center;
      color: var(--error);
      @media (min-width: 600px) {
        border: 2px solid var(--error);
        border-radius: 50%;
        width: 18px;
        height: 18px;
        bottom: -10px;
        right: -10px;
      }
    }
  }
  div.user-contacts {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 34px;

    @media (min-width: 600px) {
      gap: 6px;
      margin-top: 40px;
      margin-left: 12px;
    }
    span.user-name {
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;
      color: var(--gray-2);

      @media (min-width: 600px) {
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        color: var(--gray-2);
      }
    }
    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: var(--gray-2);
      @media (min-width: 600px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: var(--gray-2);
      }
    }
  }
`;
export const Contacts = styled.div`
  display: flex;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  @media (min-width: 600px) {
    top: 40px;
  }

  button {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    margin: 9px;
    @media (min-width: 600px) {
      width: 139px;
      height: 34;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
export const DivNetworks = styled.div`
  width: 96%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  @media (min-width: 600px) {
    margin-left: 65px;
    margin-top: 50px;
    align-self: flex-start;
  }
  h3 {
    align-self: flex-start;
    margin-left: 19px;
    margin-bottom: 11px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray-2);
    @media (min-width: 600px) {
      font-size: 16px;
      line-height: 19px;
      margin-left: -12px;
    }
  }
  div {
    width: 250px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 18px;
    @media (min-width: 600px) {
      width: 205;
    }
    a {
      width: 70px;
      height: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--gray-2);
      background-color: var(--color-green-primary);
      border-radius: 4px;
      transition: 0.3s;
      &:hover {
        background-color: var(--color-green-primary-hover);
      }
      @media (min-width: 600px) {
        width: 90px;
      }
      span {
        font-style: italic;
        font-weight: 400;
        font-size: 10px;
        color: var(--gray-2);
        @media (min-width: 600px) {
          font-size: 12px;
        }
      }

      svg.svg-doublerigth-style {
        margin: 3px;
        color: var(--gray-2);
        font-size: 12px;
        @media (min-width: 600px) {
          font-size: 14px;
        }
      }
    }
  }
`;
export const DivFlex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  margin-top: 15px;
  @media (min-width: 600px) {
    flex-direction: row;
    &::after {
      content: '';
      height: 2.5px;
      width: 800px;
      background-color: var(--color-yellow-second);
      align-self: center;
      position: absolute;
      bottom: 0;
      right: 55px;
    }
  }
`;
export const SectionUserDescription = styled.section`
  width: 96%;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  @media (min-width: 600px) {
    width: 50%;
    max-width: 364px;
    margin-left: 65px;
    margin-top: 50px;
    align-self: flex-start;
  }
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--gray-2);
    margin-bottom: 20px;
    @media (min-width: 600px) {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
    }
    span {
      font-style: italic;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      margin-left: 5px;
      @media (min-width: 600px) {
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
  &::after {
    content: '';
    height: 2.5px;
    width: 256px;
    background-color: var(--color-yellow-second);
    align-self: center;
    @media (min-width: 600px) {
      position: absolute;
      width: 2.5px;
      height: 131px;
      right: 0;
      top: 10px;
    }
  }
`;
export const PhysicalDescriptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 21px;
  @media (min-width: 600px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const Pipe = styled.span`
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: var(--color-yellow-second);
  @media (min-width: 600px) {
    display: none;
  }
`;
export const SectionUserAddress = styled.section`
  width: 96%;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin-top: 23px;
  @media (min-width: 600px) {
    width: 50%;
    max-width: 364px;
    margin-left: 65px;
    margin-top: 50px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--gray-2);
    margin-bottom: 12px;
    @media (min-width: 600px) {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;

      margin-bottom: 29px;
    }
    span {
      font-style: italic;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: var(--gray-2);
      margin-left: 5px;
      @media (min-width: 600px) {
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
  &::after {
    content: '';
    height: 2.5px;
    width: 256px;
    background-color: var(--color-yellow-second);
    align-self: center;
    @media (min-width: 600px) {
      display: none;
    }
  }
`;
export const SectionGroupList = styled.section`
  margin-top: 10px;
  width: 100%;
  @media (min-width: 600px) {
    margin-top: 30px;
  }
  span.section-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray-2);
    margin-left: 8px;
    @media (min-width: 600px) {
      font-weight: 400;
      font-size: 26px;
      line-height: 31px;
    }
  }
`;
export const UlTeamCard = styled.ul`
  height: auto;
  overflow: auto;
  margin-top: 10px;
  li {
    width: inherit;
  }
`;
