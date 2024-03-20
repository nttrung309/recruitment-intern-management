import React, { useEffect } from 'react'

import MainLayout from 'src/layout/MainLayout'

import FormIcon from '../../../shared/assets/icon/form-lookup-icon.svg';
import BusinessIcon from '../../../shared/assets/icon/business-icon.svg';

import { useSelector } from 'react-redux';
import { SelectedTestIdSelector } from 'src/modules/test/testStore';
import { useLocation } from 'react-router-dom';

import { routerBusinessRecruit } from './router';

import RecruitLayout from '../recruit-layout';

interface HeaderItem {
    icon: string;
    label: string;
    url: string;
}

const BusinessRecruitPage: React.FC = () => {
    const selectedTestId = useSelector(SelectedTestIdSelector);
    const location = useLocation();

    const headerItems = [
        { icon: FormIcon, label: 'Tìm kiếm việc làm', url: routerBusinessRecruit.path},
        { icon: BusinessIcon, label: 'Doanh nghiệp đăng ký', url: location.pathname + '/register'}
    ];

    return (
        <RecruitLayout headerItems={headerItems}/>
    );
}

export default BusinessRecruitPage;