import React from "react";

interface SubmitTestFormProps {
    HandleCloseForm: () => void;
    HandleSubmitTest: () => void;
}

const SubmitTestForm: React.FC<SubmitTestFormProps> = ({HandleCloseForm, HandleSubmitTest}) => {
    return(
        <div className="submit-test-form">
            <div className="submit-test-form__title">
                Nộp bài thi
            </div>
            <div className="submit-test-form__content">
                Bạn có chắc muốn nộp bài thi hay không?
            </div>
            <div className="submit-test-form__btn-group">
                <input className="btn close-submit-form" type="button" value="Đóng" onClick={HandleCloseForm}/>
                <input className="btn accept-submit-form" type="button" value="Xác nhận" onClick={HandleSubmitTest}/>
            </div>
        </div>
    );
}

export default SubmitTestForm;