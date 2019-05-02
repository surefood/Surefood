import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/route';

function Sidebar({ firebase }) {
  return (
    <div className="sidebar p-4">
      <ul>
        <li>
          <Link to={ROUTES.HOME}>
            <i class="fas fa-home" />
            Home
          </Link>
        </li>
        <li>
          <Link to={ROUTES.DASHBOARD}>
            <i class="fas fa-columns" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link>
            <i class="fas fa-shopping-cart" />
            Orders
          </Link>
        </li>
        <li>
          <Link>
            <i class="fas fa-drumstick-bite" /> Meal plans
          </Link>
        </li>
        <li>
          <Link>
            <i class="fas fa-chart-bar" />
            Products
          </Link>
        </li>
        <li>
          <Link>
            {' '}
            <i class="fas fa-address-card" /> Customers
          </Link>
        </li>
        <li>
          <Link>
            <i class="fas fa-money-bill-wave" /> Transactions
          </Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN} onClick={firebase.signOut}>
            <i class="fas fa-door-open" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default withFirebase(Sidebar);
