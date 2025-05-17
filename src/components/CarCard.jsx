import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      width: '300px',
    }}>
      <img src={car.image} alt={`${car.make} ${car.model}`} width="100%" />
      <h3>{car.make} {car.model}</h3>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <Link to={`/car/${car.id}`}>View Details</Link>
    </div>
  );
}

export default CarCard;
