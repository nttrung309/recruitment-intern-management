//Public Routes
import { routerLogin } from "../views/auth/Login/router";
import { routerForgotPassword } from "../views/auth/ForgotPassword/router";
import { routerResetPassword } from "../views/auth/ResetPassword/router";
import { routerUserRecruit } from "../views/recruit/UserRecruit/router";
import { routerBusinessRecruit } from "../views/recruit/BusinessRecruit/router";
import { routerRecruitNotFound } from "../views/recruit/NotFound/router";
import { routerUserRegister } from "../views/recruit/Register/UserRegister/router";
import { routerBusinessRegister } from "../views/recruit/Register/BusinessRegister/router";

//Private Routes
import { routerHome } from "../views/home/router";
import { routerTest } from "../views/test/router";
import { routerProcess } from "../views/process/router";

import { IRouter } from '@routers/interface';

export const privatePage: IRouter[] = [
    routerHome,
    routerTest,
    routerProcess
];

export const publicPage: IRouter[] = [
    routerLogin,
    routerForgotPassword,
    routerResetPassword,
    routerUserRecruit,
    routerBusinessRecruit,
    routerRecruitNotFound,
    routerUserRegister,
    routerBusinessRegister
];