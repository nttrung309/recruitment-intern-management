import React, { useState } from "react";
import { Checkbox } from "antd";

const FilterDropdown = () => {
    //const [selectedCompanies, setSelectedCompanies] = useState(['Tất cả']);

    const companies = [
        'Tất cả',
        'Alta Group',
        'Alta Media',
        'Alta Software',
        'Alta Plastic',
        'Unigons'
    ];

    // const HandleSelectCompany = (company: any) => {
    //     if (!selectedCompanies.includes(company)) {
    //         setSelectedCompanies([...selectedCompanies, company]);
    //     } else {
    //         setSelectedCompanies(selectedCompanies.filter((item: any) => item !== company));
    //     }
    // }

    return(
        <div className="filter-dropdown">
            <div className="company-select">
                <p className="company-select__title">Chọn công ty</p>
                <div className="company-select__item-container">
                    {companies.map(company => (
                        <div
                            //onClick={() => {HandleSelectCompany(company)}}
                            className={'company-select__item '}>{company}
                        </div>)
                    )}
                </div>
            </div>
            <div className="major-select">
                <div className="major-select__header">
                    <p className="company-select__header__title">Chọn công ty</p>
                    <div className="major-select__header__select-all">Chọn tất cả</div>
                </div>
                <div className="major-select__item-container">
                    {companies.map(company => {
                        return(
                            <div className="company-select-item">
                                <p className="company-select-item__label">{company}</p>
                                <Checkbox/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FilterDropdown;