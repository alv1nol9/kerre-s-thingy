import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // <--- IMPORT useNavigate
import '../../css/CarSearchBar.css';
import carData from '../data/carData';

const CarSearchBar = () => {
  const navigate = useNavigate(); // <--- INITIALIZE useNavigate

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuelType, setFuelType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct query parameters
    const queryParams = new URLSearchParams();
    if (make) queryParams.append('make', make);
    if (model) queryParams.append('model', model);
    if (yearFrom) queryParams.append('yearFrom', yearFrom);
    if (yearTo) queryParams.append('yearTo', yearTo);
    if (transmission) queryParams.append('transmission', transmission);
    if (fuelType) queryParams.append('fuelType', fuelType);

    // Navigate to the /cars page with the search parameters
    navigate(`/cars?${queryParams.toString()}`);

    // No need for alert() now, as navigation handles the "work"
    console.log("Navigating with search data:", queryParams.toString());
  };

  return (
    <div className="search-container">
      <h3>Find a Car</h3>
      <form className="search-box" onSubmit={handleSubmit}>
        <select value={make} onChange={(e) => {
          setMake(e.target.value);
          setModel(""); // Reset model when make changes
        }}>
          <option value="">--All Makes--</option>
          {Object.keys(carData).map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>

        <select value={model} onChange={(e) => setModel(e.target.value)} disabled={!make}>
          <option value="">--All Models--</option>
          {make && carData[make].map((mod) => (
            <option key={mod} value={mod}>{mod}</option>
          ))}
        </select>

        <div className="inline-selects">
          <select value={yearFrom} onChange={(e) => setYearFrom(e.target.value)}>
            <option value="">Year from</option>
            {[2005, 2010, 2015, 2020].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>

          <select value={yearTo} onChange={(e) => setYearTo(e.target.value)}>
            <option value="">Year to</option>
            {[2015, 2020, 2024].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div className="inline-selects">
          <select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
            <option value="">Transmission</option>
            <option>Automatic</option>
            <option>Manual</option>
          </select>

          <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
            <option value="">Fuel Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
          </select>
        </div>

        <button type="submit" className="search-button">🔍 SEARCH</button>
      </form>
    </div>
  );
};

export default CarSearchBar;