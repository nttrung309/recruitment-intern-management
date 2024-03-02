import React from 'react'

import headerImg from '../../../../shared/assets/images/auth-layout.svg';

interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
      <div className='footer'>
        <div className='footer__content'>
            Alta Software - Training Team 2023
        </div>
      </div>
    );
};
  
export default Footer;
