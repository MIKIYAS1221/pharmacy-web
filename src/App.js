import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import LoginPage from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Medicine from './pages/medicine/medicine';
import User from './pages/user/user';
import Supplier from './pages/supplier/supplier';
import Sale from './pages/sale/sale';
import Purchaseorders from './pages/purchas order/purchaseorder';
import Refills from './pages/refill/refills';
import Catagory from './pages/Catagories/catagories';
import Patient from './pages/patients/patients';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><LoginPage/></Layout>} />
      <Route path="/dashboard" element={<Layout><Dashboard/></Layout>} />
      <Route path="/medicines" element={<Layout><Medicine/></Layout>} />
      <Route path="/staffs" element={<Layout><User/></Layout>} />
      <Route path="/suppliers" element={<Layout><Supplier/></Layout>} />
      <Route path="/sales" element={<Layout><Sale/></Layout>} />
      <Route path="/purchase orders" element={<Layout><Purchaseorders/></Layout>} />
      <Route path="/refill" element={<Layout><Refills/></Layout>} />
      <Route path="/categories" element={<Layout><Catagory/></Layout>} />
      <Route path="/patients" element={<Layout><Patient/></Layout>} />
    </Routes>
  );
}

export default App;
