import React, { useState } from "react";

import { Dropdown, Input, Select, Checkbox, Button } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import LookUpIcon from '../../../shared/assets/icon/look-up-icon.svg';
import FilterIcon from '../../../shared/assets/icon/filter-icon.svg';
import { ReactSVG } from "react-svg";

import FilterDropdown from "./FilterDropdown";

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
    ];

    const [selectedCompanies, setSelectedCompanies] = useState(['Tất cả']);
    const [selectedMajors, setSelectedMajors] = useState(['Tất cả']);

    const FilterDropdown = () => {
    
        const companies = [
            'Tất cả',
            'Alta Group',
            'Alta Media',
            'Alta Software',
            'Alta Plastic',
            'Unigons'
        ];

        const majors = [
            'Lập trình Front-end',
            'Lập trình back-end',
            'VFX Artist',
            'UI/UX Design',
            '3D Artist'
        ];
    
        const HandleSelectCompany = (company: any) => {
            if (!selectedCompanies.includes(company)) {
                setSelectedCompanies([...selectedCompanies, company]);
            } else {
                setSelectedCompanies(selectedCompanies.filter((item: any) => item !== company));
            }
        }

        const HandleSelectMajor = (major: any) => {
            if (!selectedMajors.includes(major)) {
                setSelectedMajors([...selectedMajors, major]);
            } else {
                setSelectedMajors(selectedMajors.filter((item: any) => item !== major));
            }
        }

        const HandleSelectAll = () => {
            if (selectedMajors.length < majors.length){
                const newSelectedMajors = [...selectedMajors]
                majors.map(major => {
                    if(!selectedMajors.includes(major)){
                        newSelectedMajors.push(major);
                    }
                })
                setSelectedMajors(newSelectedMajors);
            }
            else{
                setSelectedMajors([]);
            }
        }
    
        return(
            <div className="filter-dropdown">
                <div className="company-select">
                    <p className="company-select__title">Chọn công ty</p>
                    <div className="company-select__item-container">
                        {companies.map(company => (
                            <div
                                key={company}
                                onClick={() => {HandleSelectCompany(company)}}
                                className={'company-select__item ' + (selectedCompanies.includes(company) ? 'selected' : '')}>{company}
                            </div>)
                        )}
                    </div>
                </div>
                <div className="major-select">
                    <div className="major-select__header">
                        <p className="major-select__header__title">Chọn lĩnh vực chuyên môn</p>
                        <div 
                            className="major-select__header__select-all"
                            onClick={HandleSelectAll}
                        >
                            Chọn tất cả
                        </div>
                    </div>
                    <div className="major-select__item-container">
                        {majors.map(major => {
                            return(
                                <div 
                                    key={major}
                                    className="major-select-item"
                                >
                                    <p 
                                        className={'major-select-item__label ' + (selectedMajors.includes(major) ? 'selected' : '')}
                                        onClick={() => {HandleSelectMajor(major)}}
                                    >
                                        {major}
                                    </p>
                                    <Checkbox 
                                        checked={selectedMajors.includes(major)}
                                        onClick={() => {HandleSelectMajor(major)}}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

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
                className='recruit-search-bar__company-select'
                defaultValue="Chọn công ty"
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
            <Button
                type='primary'
                icon={<ReactSVG className='lookup-recruit-icon' src={LookUpIcon}/>}
            >
                Tìm việc
            </Button>
            <Dropdown
                dropdownRender={FilterDropdown}
                trigger={['click']}
            >
                <div className='btn-filter-recruit'>
                    <p>Lọc</p>
                    <ReactSVG className='filter-recruit-icon' src={FilterIcon}/>
                </div>
            </Dropdown>
        </div>
    );
};

export default RecruitSearchBar;