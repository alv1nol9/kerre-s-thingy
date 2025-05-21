import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Header.css'; // <--- ADJUSTED PATH

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">Kerre Motors</Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cars">Browse Cars</Link></li>
          <li><Link to="/sell">Sell your car</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;