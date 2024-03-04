import React from 'react';

import { IRouter } from '@routers/interface';

export const routerTest: IRouter = {
  path: '/test',
  element: React.lazy(() => import('./index'))
};