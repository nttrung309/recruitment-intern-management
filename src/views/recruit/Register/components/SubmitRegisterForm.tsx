import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

import FlagImg from '../../../../shared/assets/images/flags-img.svg';
import SpeakerImg from '../../../../shared/assets/images/speaker-img.svg';

const SubmitRegisterForm: React.FC<{url: any}> = ({url}) => {
    const navigate = useNavigate();

    return(
        <div className="submit-register-form">
            <div className="submit-register-form__title">
                Thông báo
            </div>
            <div className="submit-register-form__content">
                Bạn đã nộp đơn ứng tuyển thành công.<br/>
                Vui lòng đợi phản hồi từ công ty qua mail của bạn!
            </div>
            <div className="submit-register-form__btn-group">
                <input className="btn close-submit-form" type="button" value="Đóng" onClick={() => navigate('/recruit/' + url)}/>
            </div>
            <ReactSVG className="submit-register-form__top-flags" src={FlagImg}/>
            <ReactSVG className="submit-register-form__bot-speakers" src={SpeakerImg}/>
        </div>
    );
}

export default SubmitRegisterForm;