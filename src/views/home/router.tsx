import React from 'react';

import { IRouter } from '@routers/interface';

export const routerHome: IRouter = {
  path: '/hehe',
  element: React.lazy(() => import('./index'))
};