import React from 'react';

const ShoppingList = ({ items, totalCost }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Цена: {item.price}, Количество: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Общая стоимость: {totalCost}</p>
    </div>
  );
};

export default ShoppingList;
