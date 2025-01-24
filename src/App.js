import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import HeaderNew from './Components/HeaderNew';
import './App.css';
 
 
function App() {
  const location = useLocation();
 
  // Define paths where HeaderWithButtons should appear
  const headerWithoutButtonsPaths = ['/LoginPage', '/RegisterPage'];
 
  // Check if the current path matches HeaderWithButtons paths
  const WithoutButtons = headerWithoutButtonsPaths.includes(
    location.pathname
  );
 
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      {!WithoutButtons && <HeaderNew />}
      {WithoutButtons && <Header />}
      {/* {useHeaderWithButtons ? <UserButton /> : <HeaderNew />} */}
      {/* Main content */}
      <div style={{ flex: 1, padding: WithoutButtons ? '0' : '20px' }}>
        <Outlet />
      </div>
    </div>
  );
}
 
export default App;