import React from 'react';

import { IRouter } from '@routers/interface';

export const routerForgotPassword: IRouter = {
  path: '/forgot-password',
  element: React.lazy(() => import('./index'))
};