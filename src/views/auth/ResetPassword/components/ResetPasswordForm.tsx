import React, { ReactNode, useState } from 'react';
import { Select, Space, Input } from 'antd';
import { CaretDownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import customDropdownIcon from '../../../../shared/assets/images/showdropdown_icon.svg';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
    children: ReactNode;
}

const ResetPasswordForm = () => {
    const [isValidInput, setIsValidInput] = useState<boolean>(true);

    const reCAPCHA = require('../../../../shared/assets/images/reCAPCHA.png');
    return (
        <div className="reset-password-form-container">
            <div className='reset-password-form'>
                <div className='reset-password-form__header'>Tạo lại mật khẩu</div>
                <form className='reset-password-form__form' onSubmit={() => {}}>
                    <div className='input-field'>
                        <p className="label">Mật khẩu</p>
                        <Input.Password placeholder="Tên đăng nhập"/>
                    </div>
                    <div className='input-field'>
                        <p className="label">Nhập lại mật khẩu</p>
                        <Input.Password placeholder="Tên đăng nhập"/>
                    </div>
                    <input className='reset-password-submit button' type="button" value="Xác nhận" />
                    <Link className='' to="/login">
                        <div className='back-login-label'>Quay lại đăng nhập</div>
                    </Link>
                </form>
            </div>
        </div>
        
        
    );
}

export default ResetPasswordForm;