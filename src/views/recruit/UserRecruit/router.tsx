import React from 'react';

import { IRouter } from '@routers/interface';

export const routerUserRecruit: IRouter = {
  path: '/recruit/user',
  element: React.lazy(() => import('./index'))
};