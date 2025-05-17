import { useParams, Link } from 'react-router-dom';

const cars = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: 12000,
    image: 'https://via.placeholder.com/600x400?text=Toyota+Corolla',
    description: 'A reliable compact sedan, perfect for city driving.',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 11000,
    image: 'https://via.placeholder.com/600x400?text=Honda+Civic',
    description: 'Sporty and efficient, great fuel economy.',
  },
];

function CarDetails() {
  const { id } = useParams();
  const car = cars.find(c => c.id === Number(id));

  if (!car) {
    return (
      <div>
        <h2>Car not found</h2>
        <Link to="/browse">Back to browse</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{car.make} {car.model} ({car.year})</h2>
      <img src={car.image} alt={`${car.make} ${car.model}`} width="600" />
      <p>{car.description}</p>
      <p><strong>Price:</strong> ${car.price}</p>
      <Link to="/browse">Back to browse</Link>
    </div>
  );
}

export default CarDetails;
