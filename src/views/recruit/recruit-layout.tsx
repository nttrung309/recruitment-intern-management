import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { SelectedTestIdSelector } from 'src/modules/test/testStore';

import MainLayout from 'src/layout/MainLayout'
import RecruitSearchBar from './components/RecruitSearchBar';

import { RecruitCardProps } from './components/RecruitCard';
import RecruitCard from './components/RecruitCard';

import AltaSoftwareLogo from '../../shared/assets/images/alta-software-logo.svg';
import AltaPlasticLogo from '../../shared/assets/images/alta-plastic-logo.svg';
import AltaMediaLogo from '../../shared/assets/images/alta-media-logo.svg';
import UnigonsLogo from '../../shared/assets/images/unigons-logo.svg';
import AltaGroupLogo from '../../shared/assets/images/alta-group-logo.svg';


interface HeaderItem {
    icon: string;
    label: string;
    url: string;
};

interface RecruitLayoutProps{
    headerItems: HeaderItem[]
};


const RecruitLayout: React.FC<RecruitLayoutProps> = ({headerItems}) => {
    const selectedTestId = useSelector(SelectedTestIdSelector);
    const navigate = useNavigate();

    const recruitCardProps: RecruitCardProps[] = [
        {
            position: 'Thiết kế UI/UX (Figma)',
            company: 'Alta Software',
            icon: AltaSoftwareLogo,
            require: 'Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript',
            email: 'tuyendung@alta.com.vn',
            phone: '0282 240 9960'
        },
        {
            position: 'Thiết kế UI/UX (Figma)',
            company: 'Alta Plastic',
            icon: AltaPlasticLogo,
            require: 'Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript',
            email: 'tuyendung@alta.com.vn',
            phone: '0282 240 9960'
        },
        {
            position: 'Thiết kế UI/UX (Figma)',
            company: 'Alta Media',
            icon: AltaMediaLogo,
            require: 'Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript',
            email: 'tuyendung@alta.com.vn',
            phone: '0282 240 9960'
        },
        {
            position: 'Thiết kế UI/UX (Figma)',
            company: 'Unigons',
            icon: UnigonsLogo,
            require: 'Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript',
            email: 'tuyendung@alta.com.vn',
            phone: '0282 240 9960'
        },
        {
            position: 'Thiết kế UI/UX (Figma)',
            company: 'Alta Group',
            icon: AltaGroupLogo,
            require: 'Có tối thiểu 1 năm kinh nghiệm ReactJS, Typecript',
            email: 'tuyendung@alta.com.vn',
            phone: '0282 240 9960'
        }
    ]   

    return (
        <MainLayout selectedItem={1} showUserMenu={false} headerItems={headerItems}>
            <div className="recruit">
                <RecruitSearchBar/>
                <div className="recruit__title">
                    {'TÌM '} 
                    <span>CÔNG VIỆC MƠ ƯỚC</span>
                    {' CỦA BẠN'} <br/>TẠI NGÔI NHÀ MỚI
                </div>
                <div className="recruit__recruit-cards">
                    {recruitCardProps.map((props: RecruitCardProps, index: number) => (
                        <RecruitCard props={props} key={index}/>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default RecruitLayout;