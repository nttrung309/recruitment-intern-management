//Public Routes
import { routerLogin } from "../views/auth/Login/router";
import { routerForgotPassword } from "../views/auth/ForgotPassword/router";
import { routerResetPassword } from "../views/auth/ResetPassword/router";

//Private Routes
import { routerHome } from "../views/home/router"

import { IRouter } from './interface';

export const privatePage: IRouter[] = [
    routerHome
];

export const publicPage: IRouter[] = [
    routerLogin,
    routerForgotPassword,
    routerResetPassword
];