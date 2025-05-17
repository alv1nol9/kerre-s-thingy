import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const dummyCars = [
  {
    _id: '1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: 8500,
    image: 'https://via.placeholder.com/400x300',
    description: 'A reliable car in excellent condition.',
  },
  {
    _id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 9200,
    image: 'https://via.placeholder.com/400x300',
    description: 'Sporty and efficient, great for city driving.',
  },
];

function EditCar() {
  const { id } = useParams();
  const existingCar = dummyCars.find((car) => car._id === id);

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    if (existingCar) {
      setFormData(existingCar);
    }
  }, [existingCar]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Updated car:', formData);
    // Later: send to backend via PUT request
  }

  if (!existingCar) {
    return <div className="p-4">Car not found.</div>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="make"
          placeholder="Make"
          value={formData.make}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="year"
          type="number"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Update Car
        </button>
      </form>
    </div>
  );
}

export default EditCar;
