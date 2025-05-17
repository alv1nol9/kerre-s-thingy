// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <h2>Car Marketplace</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse">Browse Cars</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
