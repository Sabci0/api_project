import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import ProtectedWrapper from './components/ProtectedWrapper';
import FakeLoginComponent from './components/FakeLoginComponent';
import FakeRegisterComponent from './components/FakeRegisterComponent';
import UserAvatar from './components/UserAvatar';
import './App.css';

const Invoices = lazy(() => import('./components/Invoices'));

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <UserAvatar />
        <Routes>
          <Route path="/login" element={<FakeLoginComponent />} />
          <Route path="/register" element={<FakeRegisterComponent />} />
          <Route
            path="/invoices"
            element={
              <ProtectedWrapper>
                <Suspense fallback={<div>Loading...</div>}>
                  <Invoices />
                </Suspense>
              </ProtectedWrapper>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
