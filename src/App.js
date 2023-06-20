import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import LoginPage from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Medicine from './pages/medicine/medicine';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><LoginPage/></Layout>} />
      <Route path="/dashboard" element={<Layout><Dashboard/></Layout>} />
      <Route path="/medicines" element={<Layout><Medicine/></Layout>} />
    </Routes>
  );
}

export default App;
