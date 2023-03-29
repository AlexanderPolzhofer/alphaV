import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/news" className="link">
        <span>News</span>
      </Link>
      <Link to="/" className="link">
        <span>Home</span>
      </Link>
    </nav>
  );
};
