import React, { useEffect } from 'react'

import MainLayout from 'src/layout/MainLayout'

import UserIcon from '../../../shared/assets/icon/user_icon.svg';
import FormIcon from '../../../shared/assets/icon/form-reg-icon.svg';

import { useSelector } from 'react-redux';
import { SelectedTestIdSelector } from 'src/modules/test/testStore';
import { useNavigate } from 'react-router-dom';

import { routerRecruitNotFound as router } from './router';

import RecruitLayout from '../recruit-layout';

interface HeaderItem {
    icon: string;
    label: string;
    url: string;
}

const UserRecruitPage: React.FC = () => {
    const selectedTestId = useSelector(SelectedTestIdSelector);
    const navigate = useNavigate();

    const headerItems: HeaderItem[] = [
        { icon: UserIcon, label: 'Xem JD yêu cầu tuyển dụng', url: router.path},
        { icon: FormIcon, label: 'Đăng kí trực tuyến', url: '/user-apply'}
    ];

    return (
        <RecruitLayout headerItems={headerItems} notFound/>
    );
}

export default UserRecruitPage;