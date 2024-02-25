import React from 'react';
import { Route } from 'react-router-dom';
import { IRouter } from '@routers/interface';

interface IShowRouter {
    routers: IRouter[];
    privateRoute?: boolean;
}

const renderRoute = (router: IRouter) => {
    const DynamicComponent: any = router.element;
    return(
        <Route
            key={router.path}
            path={router.path}
            element={<DynamicComponent/>}
        />
    )
};

const useRouter = ({ routers, privateRoute }: IShowRouter) => {
    return React.useMemo(() => {
        return { views: routers.map(it => renderRoute(it)), routes: routers };
    }, [routers, privateRoute]);
}

export default useRouter;