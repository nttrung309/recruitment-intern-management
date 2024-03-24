import React, { ReactNode, useState } from 'react';

import { Select, Space, Input, Button, Modal } from 'antd';
import { CaretDownOutlined, InfoCircleOutlined } from '@ant-design/icons';

import customDropdownIcon from '../../../../shared/assets/images/showdropdown_icon.svg';

import { Link } from 'react-router-dom';

import RegistrationSuccessMessage from '../../components/RegistrationSuccessMessage';

interface AuthLayoutProps {
    children: ReactNode;
}

const ResetPasswordForm = () => {
    const [isValidInput, setIsValidInput] = useState<boolean>(true);
    const [isSubmitFormOpen, setIsSubmitFormOpen] = useState<boolean>(false);

    const OpenSubmitForm = () => {
        setIsSubmitFormOpen(true)
    }

    

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
                    <Button 
                        type='primary'
                        onClick={() => setIsSubmitFormOpen(true)}
                    >
                        Xác nhận
                    </Button>
                    <Link className='' to="/login">
                        <div className='back-login-label'>Quay lại đăng nhập</div>
                    </Link>
                </form>
            </div>
            <Modal className="modal-submit-test"
                open={isSubmitFormOpen}
                centered
                footer={null}
                modalRender={() => <RegistrationSuccessMessage/>}
            />
        </div>
        
        
    );
}

export default ResetPasswordForm;