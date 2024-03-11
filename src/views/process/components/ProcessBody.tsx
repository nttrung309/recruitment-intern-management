import React, { useEffect } from 'react'

import MainLayout from 'src/layout/MainLayout'

import { useSelector } from 'react-redux';
import { SelectedTestIdSelector } from 'src/modules/test/testStore';

import { useNavigate } from 'react-router-dom';

import { Input, Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import BtnSendIcon from '../../../shared/assets/icon/send-report-icon.svg'
import { ReactSVG } from 'react-svg';

const { Option } = Select;

const ProcessBody: React.FC = () => {
    const selectedTestId = useSelector(SelectedTestIdSelector);
    const navigate = useNavigate();

    const studyingGroup = [
        {
            id: 'class001',
            name: 'Lớp 1'
        },
        {
            id: 'class002',
            name: 'Lớp 2'
        },
        {
            id: 'class003',
            name: 'Lớp 3'
        }
    ];

    return (
        <div className='process'>
            <div className="process__container">
                <div className="process__title">
                    {'Xin chào '}
                    <span className='process__title__username'>
                        Nguyễn Thành Trung
                    </span>
                </div>
                <form action="" className='process__form-submit'>
                    <div className='process__form-submit__item'>
                        <div className="process__form-submit__item__label">
                            Chọn lớp / Chọn nhóm thực tập
                        </div>
                        <Select
                            className='process__form-submit__item__select'
                            defaultValue="Chọn đề thi"
                            suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
                        >
                            {studyingGroup.map((group: any) => (
                                <Option key={group.id} value={group.id} label={group.name}>
                                    <div className='process__form-submit__item__select__option'>
                                        {group.name}
                                    </div>
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div className='process__form-submit__item'>
                        <div className="process__form-submit__item__label">
                            Link file
                        </div>
                        <Input className='process__form-submit__item__input' placeholder="Nhập trường đang học"/>
                    </div>
                    <div className='process__form-submit__item'>
                        <div className="process__form-submit__item__label">
                            Nội dung báo cáo
                        </div>
                        <Input.TextArea 
                            className='process__form-submit__item__textbox'
                            autoSize={true}
                            placeholder={'Hội An luôn được xếp vào danh sách những địa điểm hấp dẫn của Việt Nam. Không chỉ là khách du lịch trong nước mà khách quốc tế đều rất ấn tượng với vẻ đẹp bình yên cùng với nền văn hóa giao thoa Đông - Tây của phố cổ.'}
                        />
                        <div className='btn-send-report'>
                            <p>Gửi</p>
                            <ReactSVG className='btn-send-report__icon' src={BtnSendIcon}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProcessBody;