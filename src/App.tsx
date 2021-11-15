import React, { FC, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import Search from './pages/search'
import Login from './pages/login'
import { ToastProvider } from 'react-toast-notifications';

const App: FC = (): JSX.Element => {

  return (
    <div className="App">
      <ToastProvider>
        <Router>
          <Fragment>
            <Routes>
              <Route path="/search" element={
                <AuthenticatedRoutes>
                  <Search />
                </AuthenticatedRoutes>} />
              <Route path="/" element={<Login />} />
            </Routes>
          </Fragment>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
