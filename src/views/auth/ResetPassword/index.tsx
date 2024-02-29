import React from 'react'
import AuthLayout from '../components/layout';
import ResetPasswordForm from './components/ResetPasswordForm';


const ResetPassword = () => {
    return(
        <AuthLayout>
            <ResetPasswordForm/>
        </AuthLayout>
    )
}

export default ResetPassword;
