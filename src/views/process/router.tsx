import React from 'react';

import { IRouter } from '@routers/interface';

export const routerProcess: IRouter = {
  path: '/process',
  element: React.lazy(() => import('./index'))
};