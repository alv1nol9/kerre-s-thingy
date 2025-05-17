import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetail() {
  const { id } = useParams();

  // For demo, just display ID; you can replace with real fetch later
  return (
    <div>
      <h1>Car Details</h1>
      <p>Car ID: {id}</p>
      {/* Replace with real car detail info */}
    </div>
  );
}

export default CarDetail;
