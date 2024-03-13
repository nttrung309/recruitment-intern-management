import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { SelectedTestIdSelector } from 'src/modules/test/testStore';

import MainLayout from 'src/layout/MainLayout'
import RecruitSearchBar from './components/RecruitSearchBar';

import UserIcon from '../../../shared/assets/icon/user_icon.svg';
import FormIcon from '../../../shared/assets/icon/form-reg-icon.svg';

interface HeaderItem {
    icon: string;
    label: string;
    url: string;
}

interface RecruitLayoutProps{
    headerItems: HeaderItem[]
}


const RecruitLayout: React.FC<RecruitLayoutProps> = ({headerItems}) => {
    const selectedTestId = useSelector(SelectedTestIdSelector);
    const navigate = useNavigate();

    return (
        <MainLayout selectedItem={1} showUserMenu={false} headerItems={headerItems}>
            <div className="recruit">
                <RecruitSearchBar/>
            </div>
        </MainLayout>
    );
}

export default RecruitLayout;