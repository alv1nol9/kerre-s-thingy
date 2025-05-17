import React, { useState } from 'react';

function AddCar() {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    image: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Add Car:', formData);
    alert('Car added (simulation)');
  }

  return (
    <div>
      <h1>Add Car</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Make
          <input name="make" value={formData.make} onChange={handleChange} required />
        </label>
        <label>
          Model
          <input name="model" value={formData.model} onChange={handleChange} required />
        </label>
        <label>
          Year
          <input name="year" type="number" value={formData.year} onChange={handleChange} required />
        </label>
        <label>
          Price
          <input name="price" type="number" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Image URL
          <input name="image" value={formData.image} onChange={handleChange} required />
        </label>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;
