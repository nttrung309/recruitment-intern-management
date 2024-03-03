import React from 'react'

const UserMenu = () => {
    const userAvatar = require("../../../../shared/assets/images/user_avatar.png")
    return(
        <div className="header-user-menu">
            <div className="header-user-menu__user-avatar">
                    <img src={userAvatar} alt="userAvatar" />
            </div>
            <p className="header-user-menu__user-name">
                Thành Trung
            </p>
        </div>
    )
}

export default UserMenu;
