import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <Outlet />
    </div>
  );
};

export default App;
