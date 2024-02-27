import React from 'react';
import { Route } from 'react-router-dom';
import { IRouter } from '@routers/interface';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

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
            element={
                <React.Suspense fallback={<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}>
                    <DynamicComponent/>
                </React.Suspense>
            }
        />
    )
};

const useRouter = ({ routers, privateRoute }: IShowRouter) => {
    return React.useMemo(() => {
        return { views: routers.map(it => renderRoute(it)), routes: routers };
    }, [routers, privateRoute]);
}

export default useRouter;