import { routerHome } from "../views/home/router"
import { routerLogin } from "../views/auth/Login/router";

import { IRouter } from './interface';


export const privatePage: IRouter[] = [];

export const publicPage: IRouter[] = [
    routerHome,
    routerLogin
];