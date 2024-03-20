import React from 'react';

import { IRouter } from '@routers/interface';

export const routerBusinessRegister: IRouter = {
  path: '/recruit/business/register',
  element: React.lazy(() => import('./index'))
};