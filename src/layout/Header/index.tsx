import React, { ReactNode, useState } from 'react'
import { useSelector } from 'react-redux';
import { StatusLoginSelector } from 'src/modules/authentication/profileStore';


import headerImg from '../../shared/assets/images/auth-layout.svg';
import { IconType } from 'antd/es/notification/interface';
import { ReactSVG } from 'react-svg';
import MenuIcon from '../../shared/assets/icon/menu-icon.svg';
import UserMenu from './components/UserMenu';

import { RootState } from 'src/modules';
import { useNavigate } from 'react-router-dom';

interface HeaderItem {
  icon: string;
  label: string;
  url: string;
}

interface HeaderProps {
  headerItems?: HeaderItem[];
  selectedItem: number;
  showUserMenu: boolean
}

const Header: React.FC<HeaderProps> = ({headerItems, selectedItem, showUserMenu}) => {
    const navigate = useNavigate();
    const statusLogin = useSelector((state: RootState) => state.profile.statusLogin);
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

    const OpenMenu = () => {
      setIsShowMenu(!isShowMenu);
    }

    return (
      <>
        <div className='header'>
          <div className='header__img-container'>
              <img src={headerImg} alt="" />
          </div>
          <div className='header__items'>
            {headerItems?.map((item, index) => (
              <div 
                key={index} 
                className={`header-item ${selectedItem === (index + 1) ? "selected" : ""}`}
                onClick={() => navigate(item.url)}
              >
                <ReactSVG className='header-item__icon' src={item.icon}/>
                <span>{item.label}</span>
              </div>
            ))}
            {showUserMenu ? <UserMenu/> : null}
          </div>
          <div className='header__dropdown-menu' onClick={OpenMenu}>
            <ReactSVG src={MenuIcon}/>
          </div>
        </div>
        <div className={'header__dropdown-menu-items ' + (isShowMenu ? 'show' : '')}>
          {headerItems?.map((item, index) => (
            <div 
              key={index} 
              className={`header-item ${selectedItem === (index + 1) ? "selected" : ""}`}
              onClick={() => navigate(item.url)}
            >
              <ReactSVG className='header-item__icon' src={item.icon}/>
              <span>{item.label}</span>
            </div>
          ))}
          {showUserMenu ? <UserMenu/> : null}
        </div>
      </>
      
    );
};
  
export default Header;