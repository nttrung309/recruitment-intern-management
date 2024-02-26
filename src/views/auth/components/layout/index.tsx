import React, { ReactNode } from 'react';
import authImg from '../../../../shared/assets/images/auth-layout.svg';

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    const bannerImg = require('../../../../shared/assets/images/auth-banner.png');
    return (
        <div className='auth-layout'>
            <div className="auth-layout__header">
                <div className='img-container'>
                    <img src={authImg} alt="My SVG" />
                </div>
                <p>HỆ THỐNG TUYỂN DỤNG <br/>
                    VÀ QUẢN LÝ SINH VIÊN THỰC TẬP
                </p>
            </div>
            <div className='auth-layout__content'>
                {children}
                <div className='banner-container'>
                    <img src={bannerImg} alt="auth-banner.png" />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;