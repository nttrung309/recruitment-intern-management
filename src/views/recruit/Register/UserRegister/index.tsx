import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';

import UserIcon from '../../../../shared/assets/icon/user_icon.svg';
import FormIcon from '../../../../shared/assets/icon/form-reg-icon.svg';
import UploadIcon from '../../../../shared/assets/icon/upload-icon.svg';
import MoreIcon from '../../../../shared/assets/icon/more-icon.svg'
import CalendarIcon from '../../../../shared/assets/icon/calendar-icon.svg'
import SendIcon from '../../../../shared/assets/icon/send-report-icon.svg'

import { routerUserRegister as router } from './router';

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

const UserRegister: React.FC = () => {
    const [isSubmitFormOpen, setIsSubmitFormOpen] = useState<boolean>(false);

    const location = useLocation();

    const headerItems: HeaderItem[] = [
        { icon: UserIcon, label: 'Xem JD yêu cầu tuyển dụng', url: '/recruit/user'},
        { icon: FormIcon, label: 'Đăng kí trực tuyến', url: location.pathname}
    ];

    return (
        <MainLayout selectedItem={2} showUserMenu={false} headerItems={headerItems}>
            <div className="recruit-register">
                <div className="recruit-register-wrapper">
                    <div className="recruit-register__title">
                        ĐIỀN THÔNG TIN ĐĂNG KÝ
                    </div>
                    <div className="recruit-register__input-item">
                        <div className="recruit-register__input-item__label">
                            Chọn file <span>*</span>
                        </div>
                        <div className="recruit-register__input-item__upload-wrapper">
                            <div className="recruit-register__input-item__upload">
                                <ReactSVG src={UploadIcon}/>
                                <div className="recruit-register__input-item__upload__btn">Chọn file</div>
                            </div>
                            <ReactSVG src={MoreIcon} className='recruit-register__input-item__upload__more'/>
                        </div>
                    </div>
                    <div className="recruit-register__form">
                        <div className='recruit-register__form__left'>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Họ và tên: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập họ và tên'/>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Ngày sinh: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__date-time-input' placeholder='10/10/2021' prefix={<ReactSVG src={CalendarIcon}/>} allowClear/>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Chọn vị trí ứng tuyển: <span>*</span>
                                </div>
                                <Select
                                    className='recruit-register__input-item__select'
                                    defaultValue="Option 1"
                                    variant="filled"
                                    suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
                                >
                                    <Option value='front-end' label='Thực tập Front-end'>
                                        <div className='recruit-register__input-item__select__option'>
                                            Thực tập Front-end
                                        </div>
                                    </Option>
                                    <Option value='Back-end' label='Thực tập Front-end'>
                                        <div className='recruit-register__input-item__select__option'>
                                            Thực tập Back-end
                                        </div>
                                    </Option>
                                </Select>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Địa chỉ email: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập email'/>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Điện thoại: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập số điện thoại'/>
                            </div>
                        </div>
                        <div className='recruit-register__form__right'>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Trường đang học: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập trường đang học'/>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Chuyên ngành học: <span>*</span>
                                </div>
                                <Input variant="filled" className='recruit-register__input-item__input' placeholder='Nhập chuyên ngành'/>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Hình thức đăng ký: <span>*</span>
                                </div>
                                <Select
                                    className='recruit-register__input-item__select'
                                    defaultValue="Option 1"
                                    variant="filled"
                                    suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
                                >
                                    <Option value='online' label='Offline'>
                                        <div className='recruit-register__input-item__select__option'>
                                            Online
                                        </div>
                                    </Option>
                                    <Option value='offline' label='Offline'>
                                        <div className='recruit-register__input-item__select__option'>
                                            Offline
                                        </div>
                                    </Option>
                                </Select>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Hình thức thực hiện: <span>*</span>
                                </div>
                                <Select
                                    className='recruit-register__input-item__select'
                                    defaultValue="Option 1"
                                    variant="filled"
                                    suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
                                >
                                    <Option value='online' label='Offline'>
                                        <div className='recruit-register__input-item__select__option'>
                                            Online
                                        </div>
                                    </Option>
                                    <Option value='offline' label='Offline'>
                                        <div className='recruit-register__input-item__select__option'>
                                            Offline
                                        </div>
                                    </Option>
                                </Select>
                            </div>
                            <div className="recruit-register__input-item">
                                <div className="recruit-register__input-item__label">
                                    Bạn biết đến Alta Group từ đâu: <span>*</span>
                                </div>
                                <Select
                                    className='recruit-register__input-item__select'
                                    defaultValue="Option 1"
                                    variant="filled"
                                    suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
                                >
                                    <Option value='opt1' label='Mạng xã hội'>
                                        <div className='recruit-register__input-item__select__option'>
                                            Mạng xã hội
                                        </div>
                                    </Option>
                                    <Option value='opt2' label='Trang tuyển dụng'>
                                        <div className='recruit-register__input-item__select__option'>
                                            Trang tuyển dụng
                                        </div>
                                    </Option>
                                    <Option value='opt3' label='Người quen'>
                                        <div className='recruit-register__input-item__select__option'>
                                            Người quen
                                        </div>
                                    </Option>
                                </Select>
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

export default UserRegister;