import React from 'react'
import AuthLayout from '../components/layout';
import ForgotPasswordForm from './components/ForgotPasswordForm';


const ForgotPassword = () => {
    return(
        <AuthLayout>
            <ForgotPasswordForm/>
        </AuthLayout>
    )
}

export default ForgotPassword;
