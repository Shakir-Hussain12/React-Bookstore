import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navBar">
      <div className="nav-header">
        <NavLink
          className={(link) => (link.isActive ? 'link active' : 'link')}
          to="/"
        >
          Bookstore CMS
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
      <IconButton>
        <Avatar alt="profile picture">Hi</Avatar>
      </IconButton>
    </nav>
  );
}
