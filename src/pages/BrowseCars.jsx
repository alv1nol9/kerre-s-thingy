import CarCard from '../components/CarCard';

function BrowseCars() {
  const cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      price: 12000,
      image: 'https://via.placeholder.com/300x200?text=Toyota+Corolla',
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      price: 11000,
      image: 'https://via.placeholder.com/300x200?text=Honda+Civic',
    },
  ];

  return (
    <div>
      <h2>Browse Cars</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default BrowseCars;
