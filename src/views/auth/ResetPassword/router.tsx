import React from 'react';

import { IRouter } from '@routers/interface';

export const routerResetPassword: IRouter = {
  path: '/reset-password',
  element: React.lazy(() => import('./index'))
};