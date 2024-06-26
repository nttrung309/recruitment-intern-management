import React, { useEffect } from 'react'

import MainLayout from 'src/layout/MainLayout'

import UserIcon from '../../shared/assets/icon/user_icon.svg';
import BookIcon from '../../shared/assets/icon/book_icon.svg';

import TestBody from './components/TestBody';
import { useSelector } from 'react-redux';
import { SelectedTestIdSelector } from 'src/modules/test/testStore';
import { useNavigate } from 'react-router-dom';

const TestPage: React.FC = () => {
    const selectedTestId = useSelector(SelectedTestIdSelector);
    const navigate = useNavigate();

    const headerItems = [
        { icon: UserIcon, label: 'Thi trắc nghiệm', url: '/test'},
        { icon: BookIcon, label: 'Tiến trình học tập', url: '/process'}
    ];

    useEffect(() => {
        if(selectedTestId === ''){
            navigate('/');
        }
    },[])

    return (
        <MainLayout selectedItem={1} showUserMenu={true} headerItems={headerItems}>
            <TestBody/>
        </MainLayout>
    );
}

export default TestPage;