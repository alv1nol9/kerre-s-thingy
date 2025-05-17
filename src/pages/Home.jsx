import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';

const dummyCars = [
  {
    _id: '1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: 8500,
    image: 'https://via.placeholder.com/400x300',
  },
  {
    _id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 9200,
    image: 'https://via.placeholder.com/400x300',
  },
];

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(dummyCars);
  }, []);

  return (
    <div>
      <h1>Available Cars</h1>
      {cars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        <div className="grid grid-cols-2">
          {cars.map(car => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
