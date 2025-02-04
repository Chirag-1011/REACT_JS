import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Student Management</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/students">Students</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add-student">Add Student</Link>
        </li>
        {/* Add auth-related links here */}
      </ul>
    </div>
  </nav>
);

export default Navbar;
