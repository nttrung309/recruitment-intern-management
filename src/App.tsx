import React, { memo, useEffect } from 'react';
import logo from './logo.svg';

import PublicPage from './routers/components/PublicPages';
import PrivatePage from './routers/components/PrivatePages';
import {publicPage} from './routers/mainRouter';
import { IRouter } from './routers/interface';

import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation, RouteObject} from 'react-router-dom';

import { useSelector } from 'react-redux';
import store from './modules';
import { RootState } from './modules';
import { StatusLoginSelector } from './modules/authentication/profileStore';

import './views/styles/styles.scss';

const MainView = memo(({ statusLogin }: { statusLogin: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const publicRoutes: string[] = publicPage.map((page: IRouter) => page.path);

  useEffect(() => {
    if (!statusLogin && !publicRoutes.includes(location.pathname)) {
        navigate('/login');
    }
  }, [statusLogin, navigate]);

  return(
    <>
      {statusLogin ? <PrivatePage /> : <PublicPage />}
    </>
  );
});

function App() {
  const statusLogin: boolean = useSelector(StatusLoginSelector);
  return (
    <Router>
      <MainView statusLogin={statusLogin} />
    </Router>
  );
}

export default App;

