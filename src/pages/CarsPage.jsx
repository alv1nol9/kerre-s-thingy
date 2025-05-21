import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../../css/CarsPage.css';
import allCars from '../data/allCarsData'; 

const CarCard = ({ car }) => {
    return (
        <div className="car-row">
            <div className="car-cell car-image-cell">
                <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="car-row-image" />
            </div>
            <div className="car-cell car-name-cell">
                <span className="mobile-label">Car:</span> {car.year} {car.make} {car.model}
            </div>
            <div className="car-cell car-price-cell">
                <span className="mobile-label">Price:</span> KES {car.price.toLocaleString()}
            </div>
            <div className="car-cell car-mileage-cell">
                <span className="mobile-label">Mileage:</span> {car.mileage.toLocaleString()} km
            </div>
            <div className="car-cell car-transmission-cell">
                <span className="mobile-label">Trans:</span> {car.transmission}
            </div>
            <div className="car-cell car-fuel-cell">
                <span className="mobile-label">Fuel:</span> {car.fuelType}
            </div>
            <div className="car-cell car-location-cell">
                <span className="mobile-label">Location:</span> {car.location}
            </div>
            <div className="car-cell car-details-cell">
                <Link to={`/cars/${car.id}`} className="view-details-button-row">
                    View
                </Link>
            </div>
        </div>
    );
};

// --- FeaturedCars Component (No change needed) ---
const FeaturedCars = ({ cars }) => {
    const featured = cars.filter(car => car.isFeatured);

    if (featured.length === 0) {
        return null;
    }

    return (
        <section className="featured-cars-section">
            <h2>Featured Cars</h2>
            <div className="car-table-container">
                <div className="car-table-header">
                    <div className="car-cell car-image-cell">Image</div>
                    <div className="car-cell car-name-cell">Car</div>
                    <div className="car-cell car-price-cell">Price</div>
                    <div className="car-cell car-mileage-cell">Mileage</div>
                    <div className="car-cell car-transmission-cell">Transmission</div>
                    <div className="car-cell car-fuel-cell">Fuel Type</div>
                    <div className="car-cell car-location-cell">Location</div>
                    <div className="car-cell car-details-cell">Details</div>
                </div>
                <div className="car-list-rows">
                    {featured.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- CarBrowser Component (No change needed) ---
const CarBrowser = ({ cars, message }) => {
    return (
        <section className="car-browser-section">
            <h2>Browse All Cars</h2>
            {message && <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555' }}>{message}</p>}
            <div className="car-table-container">
                {(cars.length > 0 || message) && (
                    <div className="car-table-header">
                        <div className="car-cell car-image-cell">Image</div>
                        <div className="car-cell car-name-cell">Car</div>
                        <div className="car-cell car-price-cell">Price</div>
                        <div className="car-cell car-mileage-cell">Mileage</div>
                        <div className="car-cell car-transmission-cell">Transmission</div>
                        <div className="car-cell car-fuel-cell">Fuel Type</div>
                        <div className="car-cell car-location-cell">Location</div>
                        <div className="car-cell car-details-cell">Details</div>
                    </div>
                )}
                <div className="car-list-rows">
                    {cars.length > 0 ? (
                        cars.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))
                    ) : (
                        !message && <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#777', padding: '20px' }}>No cars found matching your criteria.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

// --- Main CarsPage Component (Now imports allCars) ---
const CarsPage = () => {
    const [searchParams] = useSearchParams();

    const make = searchParams.get('make');
    const model = searchParams.get('model');
    const yearFrom = searchParams.get('yearFrom');
    const yearTo = searchParams.get('yearTo');
    const transmission = searchParams.get('transmission');
    const fuelType = searchParams.get('fuelType');

    const filteredCars = allCars.filter(car => { // allCars is now imported
        let matches = true;

        if (make && car.make.toLowerCase() !== make.toLowerCase()) {
            matches = false;
        }
        if (model && car.model.toLowerCase() !== model.toLowerCase()) {
            matches = false;
        }
        if (yearFrom && car.year < parseInt(yearFrom)) {
            matches = false;
        }
        if (yearTo && car.year > parseInt(yearTo)) {
            matches = false;
        }
        if (transmission && car.transmission.toLowerCase() !== transmission.toLowerCase()) {
            matches = false;
        }
        if (fuelType && car.fuelType.toLowerCase() !== fuelType.toLowerCase()) {
            matches = false;
        }

        return matches;
    });

    const displayMessage = (make || model || yearFrom || yearTo || transmission || fuelType) && filteredCars.length === 0
        ? "No cars found matching your search criteria."
        : "";

    return (
        <div className="cars-page-container">
            <header className="cars-page-header">
                <div className="overlay"></div>
                <div className="header-content">
                    <h1>Browse Our Inventory</h1>
                    <p className="breadcrumb">Home / Cars</p>
                </div>
            </header>

            <main className="cars-page-main">
                {!searchParams.toString() && <FeaturedCars cars={allCars} />}
                <CarBrowser cars={filteredCars} message={displayMessage} />
            </main>
        </div>
    );
};

export default CarsPage;