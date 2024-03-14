import React from "react";

import { ReactSVG } from "react-svg";

import DownloadIcon from '../../../shared/assets/icon/download-icon.svg';
import MailIcon from '../../../shared/assets/icon/mail-icon.svg';
import PhoneIcon from '../../../shared/assets/icon/phone-icon.svg';

export interface RecruitCardProps{
    position: string;
    company: string;
    icon: string;
    require: string;
    email: string;
    phone: string;
}

const RecruitCard: React.FC<{props: RecruitCardProps}> = ({props}) => {
    const { position, company, icon, require, email, phone } = props;

    return(
        <div className="recruit-card">
            <div className="recruit-card__header">
                <div className="recruit-card__header__left">
                    <ReactSVG src={icon} className="recruit-card__header__left__icon"/>
                    <div className="recruit-card__header__left__info">
                        <div className="recruit-card__header__left__info__position">{position}</div>
                        <div className="recruit-card__header__left__info__company-name">{company}</div>
                    </div>
                </div>
                <div className="recruit-card__header__right">
                    <ReactSVG src={DownloadIcon}/>
                </div>
            </div>
            <div className="recruit-card__requirement">
                {'Yêu cầu: ' + require}
            </div>
            <div className="recruit-card__divider"></div>
            <div className="recruit-card__contact">
                <div className="recruit-card__contact__email">
                    <ReactSVG src={MailIcon}/>
                    {email}
                </div>
                <div className="recruit-card__contact__divider"></div>
                <div className="recruit-card__contact__phone">
                    <ReactSVG src={PhoneIcon}/>
                    {phone}
                </div>
            </div>
        </div>
    )
};

export default RecruitCard;