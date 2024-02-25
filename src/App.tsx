import React from 'react';
import logo from './logo.svg';
import PublicPages from './routers/components/PublicPages';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <PublicPages/>
    </Router>
  );
}

export default App;
