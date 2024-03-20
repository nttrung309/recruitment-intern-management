import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';

import UserIcon from '../../../../shared/assets/icon/user_icon.svg';
import FormIcon from '../../../../shared/assets/icon/form-reg-icon.svg';
import UploadIcon from '../../../../shared/assets/icon/upload-icon.svg';
import MoreIcon from '../../../../shared/assets/icon/more-icon.svg'
import CalendarIcon from '../../../../shared/assets/icon/calendar-icon.svg'
import SendIcon from '../../../../shared/assets/icon/send-report-icon.svg'

import { routerBusinessRegister as router } from './router';

import { ReactSVG } from 'react-svg';
import { Input, Modal, Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import SubmitRegisterForm from '../components/SubmitRegisterForm';

interface HeaderItem {
    icon: string;
    label: string;
    url: string;
};

const {Option} = Select;

const BusinessRegister: React.FC = () => {
    const [isSubmitFormOpen, setIsSubmitFormOpen] = useState<boolean>(false);

    const location = useLocation();

    const headerItems: HeaderItem[] = [
        { icon: UserIcon, label: 'Xem JD yêu cầu tuyển dụng', url: '/recruit/business'},
        { icon: FormIcon, label: 'Đăng kí trực tuyến', url: location.pathname}
    ];

    return (
        <MainLayout selectedItem={2} showUserMenu={false} headerItems={headerItems}>
            <div className="recruit-register">
                <div className="recruit-register-wrapper">
                    <div className="recruit-register__title">
                        ĐIỀN THÔNG TIN ĐĂNG KÝ
                    </div>
                    <div className="recruit-register__form">
                        <div className='recruit-register__form__left'>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Email liên hệ: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập email'/>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Tên doanh nghiệp: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập tên doanh nghiệp'/>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Điện thoại công ty: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập số điện thoại'/>
                            </div>
                        </div>
                        <div className='recruit-register__form__right'>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Địa chỉ công ty: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập địa chỉ công ty'/>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Người quản lý: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập người quản lý'/>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Điện thoại người quản lý: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập số điện thoại quản lý'/>
                            </div>
                        </div>
                    </div>
                    <div className='recruit-register__form-caption'>
                            <span>*</span>
                            {' là những trường thông tin bắt buộc'}
                    </div>
                    <div className='recruit-register__btn-send' onClick={() => setIsSubmitFormOpen(true)}>
                            <p>Gửi</p>
                            <ReactSVG className='btn-send-report__icon' src={SendIcon}/>
                    </div>
                </div>
                <Modal className="modal-submit-test"
                    open={isSubmitFormOpen}
                    centered
                    footer={null}
                    modalRender={() => <SubmitRegisterForm url='user'/>}
                />
            </div>
        </MainLayout>
    );
}

export default BusinessRegister;