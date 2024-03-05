import React from 'react'

import MainLayout from 'src/layout/MainLayout'

import UserIcon from '../../shared/assets/icon/user_icon.svg';
import BookIcon from '../../shared/assets/icon/book_icon.svg';

import TestBody from './components/TestBody';

const TestPage: React.FC = () => {
    const headerItems = [
        { icon: UserIcon, label: 'Thi trắc nghiệm' },
        { icon: BookIcon, label: 'Tiến trình học tập' }
    ];

    return (
        <MainLayout selectedItem={2} showUserMenu={true} headerItems={headerItems}>
            <TestBody/>
        </MainLayout>
    );
}

export default TestPage;