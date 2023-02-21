import React, { useState } from 'react';
import '../App.css';

const categories = ['Category 1', 'Category 2', 'Category 3'];

function NewProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className='home'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" step="0.01" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Quantity:
          <div>
            <input type="number" min="0" max="99" value={quantity} onChange={handleQuantityChange} />
            <button type="button" onClick={handleQuantityIncrement}>
              +
            </button>
            <button type="button" onClick={handleQuantityDecrement}>
              -
            </button>
          </div>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewProduct;
