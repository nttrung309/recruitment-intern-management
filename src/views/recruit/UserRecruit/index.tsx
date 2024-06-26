import React, { useEffect } from 'react'

import { useLocation } from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout'

import UserIcon from '../../../shared/assets/icon/user_icon.svg';
import FormIcon from '../../../shared/assets/icon/form-reg-icon.svg';

import { useSelector } from 'react-redux';
import { SelectedTestIdSelector } from 'src/modules/test/testStore';


import { routerUserRecruit } from './router';

import RecruitLayout from '../recruit-layout';

interface HeaderItem {
    icon: string;
    label: string;
    url: string;
}

const UserRecruitPage: React.FC = () => {
    const selectedTestId = useSelector(SelectedTestIdSelector);
    const location = useLocation();

    const headerItems: HeaderItem[] = [
        { icon: UserIcon, label: 'Xem JD yêu cầu tuyển dụng', url: routerUserRecruit.path},
        { icon: FormIcon, label: 'Đăng kí trực tuyến', url: location.pathname + '/register'}
    ];

    return (
        <RecruitLayout headerItems={headerItems}/>
    );
}

export default UserRecruitPage;