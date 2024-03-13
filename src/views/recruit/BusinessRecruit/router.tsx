import React from 'react';

import { IRouter } from '@routers/interface';

export const routerBusinessRecruit: IRouter = {
  path: '/recruit/business',
  element: React.lazy(() => import('./index'))
};