import React from 'react'

import { useSelector } from 'react-redux';
import { RootState } from 'src/modules';
import { UsernameSelector } from 'src/modules/authentication/profileStore';

import { Select, Avatar } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const HomeBody = () => {
    const navigate = useNavigate();
    const userName: string = useSelector(UsernameSelector);
    const testNames = [
        { value: 'backend-test', label: 'Đề thi môn Lập trình Back-end (Ngôn ngữ CSharp .Net, làm API)' },
        { value: 'frontend-test', label: 'Đề thi môn Lập trình Front-end (ReactJS, Redux)' }
    ]

    return(
        <div className='home'>
            <div className="home__title">
                {'Xin chào '}
                <span className='home__title__username'>
                    {userName}
                </span>
            </div>
            <div className='home__select-test'>
                <Select
                    className='home__select-test__select'
                    defaultValue="Chọn đề thi"
                    suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
                >
                    {testNames.map(testName => (
                        <Option style={{ height: 48}} key={testName.value} value={testName.value} label={testName.label}>
                            <div className='home__select-test__select__option'>
                                {testName.label}
                            </div>
                        </Option>
                    ))}
                </Select>
                <input className='btn-home-create-test' type="button" value="+ Tạo đề thi" onClick={() => {navigate('/test')}}/>
            </div>
        </div>
    );
}

export default HomeBody;