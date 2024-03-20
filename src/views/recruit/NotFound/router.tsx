import React from 'react';

import { IRouter } from '@routers/interface';

export const routerRecruitNotFound: IRouter = {
  path: '/recruit/notfound',
  element: React.lazy(() => import('./index'))
};