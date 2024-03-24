import React from 'react'

import { Button } from 'antd';

import { useNavigate } from 'react-router-dom';

const RegistrationSuccessMessage = () => {
    const navigate = useNavigate();

    return(
        <div className="regis-success-msg">
            <div className="regis-success-msg__header">
                <div className="regis-success-msg__title">
                    Tạo mật khẩu thành công
                </div>
                <div className="regis-success-msg__content">
                    Đăng nhập ngay để bắt đầu nhận được các cơ hội sự nghiệp lý tưởng
                </div>
            </div>
            
            <Button onClick={() => navigate('/login')} type='primary'>Đăng nhập ngay</Button>
        </div>
    );
};

export default RegistrationSuccessMessage;
