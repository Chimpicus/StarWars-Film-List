import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Star Wars - Film Library</h1>
      <div className="links">
        <Link to="/">Film List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
