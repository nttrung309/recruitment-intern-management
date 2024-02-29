import React from 'react'

const RegistrationSuccessMessage: React.FC = () => {
    return(
        <div className="regis-success-msg">
            <div className="regis-success-msg__header">
                Tạo mật khẩu thành công
            </div>
            <div className="regis-succsess-msg__content">
                Đăng nhập ngay để bắt đầu nhận được các cơ hội sự nghiệp lý tưởng
            </div>
            <input type="button" value="Đăng nhập ngay" />
        </div>
    );
}
