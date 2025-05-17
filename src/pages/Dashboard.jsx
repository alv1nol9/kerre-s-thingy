import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';

const userDummyCars = [
  {
    _id: '1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: 8500,
    image: 'https://via.placeholder.com/400x300',
  },
  {
    _id: '3',
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    price: 20000,
    image: 'https://via.placeholder.com/400x300',
  },
];

function Dashboard() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(userDummyCars);
  }, []);

  return (
    <div>
      <h1>My Listings</h1>
      {cars.length === 0 ? (
        <p>You have no cars listed yet.</p>
      ) : (
        <div className="grid grid-cols-1">
          {cars.map(car => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
