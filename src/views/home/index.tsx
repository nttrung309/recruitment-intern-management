import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/modules';
import HomeBody from './components/HomeBody';
import MainLayout from 'src/layout/MainLayout';

import UserIcon from '../../shared/assets/icon/user_icon.svg';
import BookIcon from '../../shared/assets/icon/book_icon.svg';


const Home = () => {
    const statusLogin = useSelector((state: RootState) => state.profile.statusLogin);
    
    const headerItems = [
        { icon: UserIcon, label: 'Thi trắc nghiệm' },
        { icon: BookIcon, label: 'Tiến trình học tập' }
    ];

    
    return(
        <MainLayout selectedItem={1} headerItems={headerItems} showUserMenu={true}>
            <HomeBody/>
        </MainLayout>
    );
}

export default Home;