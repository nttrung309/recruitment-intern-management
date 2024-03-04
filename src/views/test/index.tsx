import React from 'react'

import MainLayout from 'src/layout/MainLayout'

import UserIcon from '../../shared/assets/icon/user_icon.svg';
import BookIcon from '../../shared/assets/icon/book_icon.svg';

const TestPage: React.FC = () => {
    const headerItems = [
        { icon: UserIcon, label: 'Thi trắc nghiệm' },
        { icon: BookIcon, label: 'Tiến trình học tập' }
    ];

    return (
        <MainLayout selectedItem={2} showUserMenu={true} headerItems={headerItems}>
            <div className='test-page'>
                <div className='test-page__title'>
                    <p>Đề thi môn</p>
                </div>
                <div className='test-page__subtitle'>
                    <p>Đề thi môn Lập trình Back-end (Ngôn ngữ CSharp .Net, làm API)</p>
                </div>
            </div>
        </MainLayout>
        
    );
}

export default TestPage;