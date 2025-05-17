import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';

const favoritesDummy = [
  {
    _id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 9200,
    image: 'https://via.placeholder.com/400x300',
  },
];

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Simulate fetching favorites
    setFavorites(favoritesDummy);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite cars yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {favorites.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

