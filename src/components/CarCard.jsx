import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={`${car.make} ${car.model}`} />
      <h3>{car.make} {car.model}</h3>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <Link to={`/car/${car._id || car.id}`}>View Details</Link>
    </div>
  );
}

export default CarCard;
