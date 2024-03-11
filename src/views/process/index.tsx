import React, { useEffect } from 'react'

import MainLayout from 'src/layout/MainLayout'
import ProcessBody from './components/ProcessBody';

import UserIcon from '../../shared/assets/icon/user_icon.svg';
import BookIcon from '../../shared/assets/icon/book_icon.svg';

import { useSelector } from 'react-redux';
import { SelectedTestIdSelector } from 'src/modules/test/testStore';
import { useNavigate } from 'react-router-dom';

const ProcessPage: React.FC = () => {
    const selectedTestId = useSelector(SelectedTestIdSelector);
    const navigate = useNavigate();

    const headerItems = [
        { icon: UserIcon, label: 'Thi trắc nghiệm', url: '/test'},
        { icon: BookIcon, label: 'Tiến trình học tập', url: '/process'}
    ];

    return (
        <MainLayout selectedItem={2} showUserMenu={true} headerItems={headerItems}>
            <ProcessBody/>
        </MainLayout>
    );
}

export default ProcessPage;