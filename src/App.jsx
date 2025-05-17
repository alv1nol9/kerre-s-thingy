import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseCars from './pages/BrowseCars';
import CarDetails from './pages/CarDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseCars />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
