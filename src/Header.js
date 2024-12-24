import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <nav>
        <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;