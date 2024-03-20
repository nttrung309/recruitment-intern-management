import React from 'react';

import { IRouter } from '@routers/interface';

export const routerUserRegister: IRouter = {
  path: '/recruit/user/register',
  element: React.lazy(() => import('./index'))
};