import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from 'src/modules';

import HomeBody from './components/HomeBody';
import MainLayout from 'src/layout/MainLayout';

import UserIcon from '../../shared/assets/icon/user_icon.svg';
import BookIcon from '../../shared/assets/icon/book_icon.svg';


const Home: React.FC = () => {
    const statusLogin = useSelector((state: RootState) => state.profile.statusLogin);

    const navigate = useNavigate();
    
    const headerItems = [
        { icon: UserIcon, label: 'Thi trắc nghiệm', url: '/'},
        { icon: BookIcon, label: 'Tiến trình học tập', url: '/process' }
    ];
    
    return(
        <MainLayout selectedItem={1} headerItems={headerItems} showUserMenu={true}>
            <HomeBody/>
        </MainLayout>
    );
}

export default Home;