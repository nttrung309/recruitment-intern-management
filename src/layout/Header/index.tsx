import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { StatusLoginSelector } from 'src/modules/authentication/profileStore';


import headerImg from '../../shared/assets/images/auth-layout.svg';
import { IconType } from 'antd/es/notification/interface';
import { ReactSVG } from 'react-svg';
import UserMenu from './components/UserMenu';

import { RootState } from 'src/modules';

interface HeaderItem {
  icon: string;
  label: string;
}

interface HeaderProps {
  headerItems: HeaderItem[];
  selectedItem: number;
  showUserMenu: boolean
}

const Header: React.FC<HeaderProps> = ({headerItems, selectedItem, showUserMenu}) => {
    const statusLogin = useSelector((state: RootState) => state.profile.statusLogin);

    return (
      <div className='header'>
        <div className='header__img-container'>
            <img src={headerImg} alt="" />
        </div>
        <div className='header__items'>
          {headerItems.map((item, index) => (
            <div key={index} className={`header-item ${selectedItem === (index + 1) ? "selected" : ""}`}>
              <ReactSVG className='header-item__icon' src={item.icon}/>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        {showUserMenu ? <UserMenu/> : null}
      </div>
    );
};
  
export default Header;