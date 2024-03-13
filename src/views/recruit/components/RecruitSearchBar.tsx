import React from "react";

import { Input, Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import LookUpIcon from '../../../shared/assets/icon/look-up-icon.svg'
import { ReactSVG } from "react-svg";

const { Option } = Select;

const RecruitSearchBar: React.FC = () => {
    const majors = [
        { value: 'Front-end Developer', label: 'Lập trình Front-end' },
        { value: 'Back-end Developer', label: 'Lập trình Back-end' },
        { value: 'Full-stack Developer', label: 'Lập trình Full-stack' }
    ];

    const companies = [
        { value: 'AltaCompany', label: 'Công ty Alta Software' },
        { value: 'ABC', label: 'Công ty ABC' },
        { value: 'VN', label: 'Công ty VN' }
    ]

    return(
        <div className="recruit-search-bar">
            <Input
                prefix={<ReactSVG className='lookup-recruit-icon' src={LookUpIcon}/>}
                variant="filled" 
                className='recruit-search-bar__position-input' placeholder="Nhập vị trí muốn ứng tuyển"
            />
            <Select
                className='recruit-search-bar__major-select'
                defaultValue="Chọn lĩnh vực chuyên môn"
                variant="filled"
                suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
            >
                {majors.map((major: any) => (
                    <Option key={major.value} value={major.value} label={major.label}>
                        <div className='recruit-search-bar__major-select__option'>
                            {major.label}
                        </div>
                    </Option>
                ))}
            </Select>
            <Select
                className='recruit-search-bar__major-select'
                defaultValue="Chọn lĩnh vực chuyên môn"
                variant="filled"
                suffixIcon={<CaretDownOutlined height={6} width={12} className='dropdown-icon'/>}
            >
                {companies.map((company: any) => (
                    <Option key={company.value} value={company.value} label={company.label}>
                        <div className='recruit-search-bar__major-select__option'>
                            {company.label}
                        </div>
                    </Option>
                ))}
            </Select>
            <div className='btn-look-up-recruit'>
                <ReactSVG className='lookup-recruit-icon' src={LookUpIcon}/>
                <p>Tìm việc</p>
            </div>
        </div>
    );
};

export default RecruitSearchBar;