import React, { ReactNode, useState } from 'react';
import { Select, Space, Input } from 'antd';
import { CaretDownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import customDropdownIcon from '../../../../shared/assets/images/showdropdown_icon.svg';
import { Link, useNavigate } from 'react-router-dom';

interface AuthLayoutProps {
    children: ReactNode;
}

const ForgotPasswordForm = () => {
    const [isValidInput, setIsValidInput] = useState<boolean>(true);

    const reCAPCHA = require('../../../../shared/assets/images/reCAPCHA.png');

    let navigate = useNavigate();

    const HandleSubmit = () => {
        navigate('/reset-password');
    };

    return (
        <div className="forgot-password-form-container">
            <div className='forgot-password-form'>
                <div className='forgot-password-form__header'>Quên mật khẩu</div>
                <div className='forgot-password-form__intro'>Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục lại mật khẩu</div>
                <form className='forgot-password-form__form' onSubmit={() => {HandleSubmit()}}>
                    <div className='input-field'>
                        <p className="label">Email</p>
                        <Input placeholder="Tên đăng nhập"/>
                    </div>
                    {!isValidInput && (
                        <div className='infor-label'>
                            <InfoCircleOutlined />
                            <div>Vui lòng nhập email</div>
                        </div>
                    )}
                    <Link className='' to="/login">
                        <div className='back-login-label'>Quay lại đăng nhập</div>
                    </Link>
                    
                    <input className='forgot-password-submit button' type="submit" value="Xác nhận" />
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordForm;