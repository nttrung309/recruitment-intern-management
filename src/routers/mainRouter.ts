import { routerHome } from "../views/home/router"
import { routerLogin } from "../views/auth/Login/router";
import { routerForgotPassword } from "../views/auth/ForgotPassword/router";
import { routerResetPassword } from "../views/auth/ResetPassword/router";

import { IRouter } from './interface';


export const privatePage: IRouter[] = [];

export const publicPage: IRouter[] = [
    routerHome,
    routerLogin,
    routerForgotPassword,
    routerResetPassword
];