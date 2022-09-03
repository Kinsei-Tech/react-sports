import { ReactNode } from 'react';
import FooterModalStyle from './style';

interface IFooterModalProps {
  children?: ReactNode;
}

const FooterModal = ({ children }: IFooterModalProps) => {
  return (
    <FooterModalStyle className='footerModal'>{children}</FooterModalStyle>
  );
};

export default FooterModal;
