import React, { memo } from 'react';
import logo from './logo.svg';
import PublicPage from './routers/components/PublicPages';
import PrivatePage from './routers/components/PrivatePages';
import { BrowserRouter as Router} from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from './modules';
import { RootState } from './modules';
import { StatusLoginSelector } from './modules/authentication/profileStore';
import './views/styles/styles.scss';

const MainView = memo(({ statusLogin }: { statusLogin: boolean }) => {
  return <>{statusLogin ? <PrivatePage /> : <PublicPage />}</>;
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
