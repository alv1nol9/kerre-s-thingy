import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import all your components
import Header from './components/Header';
import CarSearchBar from './components/Carsearhbar';
import IntroSection from './components/IntroSection';

// Import pages
import CarsPage from './pages/CarsPage';
import ContactUsPage from './pages/ContactUsPage';

// --- HomePage Component ---
// This component aggregates the IntroSection and CarSearchBar for the root path.
const HomePage = () => {
  return (
    <>
      <IntroSection />
      {/* CarSearchBar now imports carData directly from its file */}
      <CarSearchBar />
    </>
  );
};

// --- CarDetailsPage Component (Placeholder) ---
// This component would display details for a specific car.
// In a real application, it would use `useParams` to get the car ID from the URL
// and then fetch the corresponding car's data.
const CarDetailsPage = () => {
  // const { id } = useParams(); // Uncomment and import useParams from 'react-router-dom' if you implement this
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Car Details Page</h2>
      <p>This is where details for a specific car would be displayed.</p>
      {/* <p>Car ID: {id}</p> */}
      <p>Implement fetching car data based on the ID from the URL.</p>
      <Link to="/cars" style={{ color: '#223b7e', textDecoration: 'underline' }}>Back to Browse Cars</Link>
    </div>
  );
};

// --- App Component ---
// This is the main application component that sets up routing.
const App = () => {
  return (
    <Router> {/* BrowserRouter provides routing context to the entire app */}
      <Header /> {/* The Header is placed outside Routes as it's typically visible on all pages */}

      <Routes> {/* Routes defines the mapping between URL paths and components */}
        {/* Route for the Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the Cars Browsing Page */}
        <Route path="/cars" element={<CarsPage />} />

        {/* Route for a specific Car Details Page with a dynamic ID parameter */}
        <Route path="/cars/:id" element={<CarDetailsPage />} />

        {/* Route for the Contact Us Page */}
        <Route path="/contact" element={<ContactUsPage />} />

        {/* Route for the "Sell Your Car" page (placeholder) */}
        <Route path="/sell" element={
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <h2>Sell Your Car Page</h2>
                <p>Content for selling a car will go here.</p>
                <Link to="/" style={{ color: '#223b7e', textDecoration: 'underline' }}>Back to Home</Link>
            </div>
        } />

        {/* Catch-all route for any unmatched paths (404 Not Found) */}
        <Route path="*" element={
          <div style={{ padding: '50px', textAlign: 'center' }}>
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p><Link to="/">Go to Home</Link></p>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
