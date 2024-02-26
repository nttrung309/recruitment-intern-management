import React, { ReactNode } from 'react';
import { Select, Space, Input } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import customDropdownIcon from '../../../../shared/assets/images/showdropdown_icon.svg';

interface AuthLayoutProps {
    children: ReactNode;
}

const LoginForm = () => {
    const reCAPCHA = require('../../../../shared/assets/images/reCAPCHA.png');
    return (
        <div className="login-form-container">
            <div className='login-form'>
                <div className='login-form__header'>Đăng nhập</div>
                <form className='login-form__form' onSubmit={() => {}}>
                    <div className='input-field'>
                        <p className="label">Vai trò <span style={{color: "#FF4747"}}>*</span></p>
                        <Select
                            defaultValue="Chọn vai trò"
                            style={{ width: "100%" }}
                            onChange={() => {}}
                            options={[
                                { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
                                { value: 'Hà Nội', label: 'Hà Nội' },
                                { value: 'Đà Nẵng', label: 'Đà Nẵng' },
                            ]}
                            suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
                        />
                    </div>
                    <div className='input-field'>
                        <p className="label">Email <span style={{color: "#FF4747"}}>*</span></p>
                        <Input onChange={() => {}} placeholder="Tên đăng nhập"/>
                    </div>
                    <div className='input-field'>
                        <p className="label">Mật khẩu <span style={{color: "#FF4747"}}>*</span></p>
                        <Input.Password placeholder="Nhập mật khẩu" />
                    </div>
                    <div className='remember-forgot-password'>
                        <div className="remember-password">
                            <input type="checkbox" id="remember-pass-checkbox" className="remember-pass-checkbox"/>
                            <p className='remember-password-label'>Ghi nhớ mật khẩu</p>
                        </div>
                        <div className='forgot-password-label'>Quên mật khẩu?</div>
                    </div>
                    <div className='recapcha-container'>
                        <img src={reCAPCHA} alt="reCAPCHA" />
                    </div>
                    <input className='login button' type="button" value="Đăng nhập" />
                </form>
            </div>
        </div>
        
        
    );
}

export default LoginForm;