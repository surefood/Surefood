import React from 'react';
import './sidebar.css';

function Dashboard() {
  return (
    <div className="sidebar p-4">
      <ul>
        <li>
          <a href="#">
            <i class="fas fa-columns" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-shopping-cart" />
            Orders
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-drumstick-bite" /> Meal plans
          </a>
        </li>
        <li>
          <a href="#">
            {' '}
            <i class="fas fa-chart-bar" />
            Products
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-address-card" /> Customers
          </a>
        </li>
        <li>
          <a href="#">
            {' '}
            <i class="fas fa-money-bill-wave" /> Transactions
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
