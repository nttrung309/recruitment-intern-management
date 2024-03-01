import React, { ReactNode, useState } from 'react';
import { Select, Space, Input } from 'antd';
import { CaretDownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import customDropdownIcon from '../../../../shared/assets/images/showdropdown_icon.svg';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

interface AuthLayoutProps {
    children: ReactNode;
}

const LoginForm = () => {
    const [isValidInput, setIsValidInput] = useState<boolean>(true);

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
                            options={[
                                { value: 'Tất Cả', label: 'Tất cả' },
                                { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
                                { value: 'Hà Nội', label: 'Hà Nội' },
                                { value: 'Đà Nẵng', label: 'Đà Nẵng' },
                            ]}
                            suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
                            dropdownRender={(menu) => (
                                <>
                                  <div style={{backgroundColor: "yellow"}}>
                                    {menu}
                                  </div>
                                </>
                            )}
                        />
                    </div>
                    <div className='input-field'>
                        <p className="label">Email <span style={{color: "#FF4747"}}>*</span></p> 
                        <Input placeholder="Tên đăng nhập"/>
                    </div>
                    <div className='input-field'>
                        <p className="label">Mật khẩu <span style={{color: "#FF4747"}}>*</span></p>
                        <Input.Password placeholder="Nhập mật khẩu" />
                    </div>
                    {!isValidInput && (
                        <div className='infor-label'>
                            <InfoCircleOutlined />
                            <div>Sai tên đăng nhập hoặc mật khẩu</div>
                        </div>
                    )}
                    
                    <div className='remember-forgot-password'>
                        <div className="remember-password">
                            <input type="checkbox" id="remember-pass-checkbox" className="remember-pass-checkbox"/>
                            <p className='remember-password-label'>Ghi nhớ mật khẩu</p>
                        </div>
                        <Link className='back-login-btn' to="/forgot-password">
                            <div className='back-login-label'>Quên mật khẩu?</div>
                        </Link>
                    </div>
                    <ReCAPTCHA
                        sitekey="6LetL4UpAAAAAGDyUAD6ATbjbVqK4BkmcTL4t9B5"
                    />
                    <input className='login button' type="button" value="Đăng nhập" />
                </form>
            </div>
        </div>
        
        
    );
}

export default LoginForm;