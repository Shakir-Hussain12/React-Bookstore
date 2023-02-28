import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navBar">
      <div className="nav-header">
        <NavLink
          className={(link) => (link.isActive ? 'link active' : 'link')}
          to="/"
        >
          Bookstore
        </NavLink>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink
            className={(link) => (link.isActive ? 'link active' : 'link')}
            to="/books"
          >
            Books
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={(link) => (link.isActive ? 'link active' : 'link')}
            to="/categories"
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
