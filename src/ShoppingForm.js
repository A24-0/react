import React, { useState } from 'react';

const ShoppingForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName || !itemPrice || !itemQuantity) return;

    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity),
    };

    onAddItem(newItem);

    setItemName('');
    setItemPrice('');
    setItemQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Наименование:
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <label>
        Цена:
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </label>
      <label>
        Количество:
        <input
          type="number"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default ShoppingForm;
