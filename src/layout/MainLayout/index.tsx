import React, { ReactNode, SVGProps } from 'react'
import Header from '../Header';
import Footer from '../Footer';

interface HeaderItem {
    icon: string;
    label: string;
  }

interface MainLayoutProps {
    children: ReactNode;
    headerItems: HeaderItem[];
    selectedItem: number
    showUserMenu: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({children, headerItems, selectedItem, showUserMenu}) => {
    return(
        <div className='main-layout'>
            <Header headerItems={headerItems} selectedItem={selectedItem} showUserMenu={showUserMenu}/>
                {children}
            <Footer/>
        </div>
    );
}

export default MainLayout;