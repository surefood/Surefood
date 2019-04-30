import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardBody from './components/DashboardBody';

function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <DashboardBody />
    </div>
  );
}

export default Dashboard;
