import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/modules';
import { UsernameSelector } from 'src/modules/authentication/profileStore';
import { SelectedTestIdSelector, TestsSelector } from 'src/modules/test/testStore';
import { setSelectedTestId } from 'src/modules/test/action';

import { Select, Avatar } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const HomeBody = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userName: string = useSelector(UsernameSelector);
    const selectedTestId: string = useSelector(SelectedTestIdSelector);
    const tests = useSelector(TestsSelector);

    const HandleChange = (selectedTestId: string) => {
        dispatch(setSelectedTestId(selectedTestId));
    };

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
                    onChange={HandleChange}
                >
                    {tests.map((testName: any) => (
                        <Option key={testName.id} value={testName.id} label={testName.label}>
                            <div className='home__select-test__select__option'>
                                {testName.label}
                            </div>
                        </Option>
                    ))}
                </Select>
                <input className='btn-home-create-test' type="button" value="+ Tạo đề thi" onClick={() => {if(selectedTestId !== ''){navigate('/test')}}}/>
            </div>
        </div>
    );
}

export default HomeBody;