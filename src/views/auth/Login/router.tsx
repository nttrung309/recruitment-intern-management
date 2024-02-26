import React from 'react';

import { IRouter } from '@routers/interface';

export const routerLogin: IRouter = {
  path: '/login',
  element: React.lazy(() => import('./index'))
};