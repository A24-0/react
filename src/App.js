import React, { useState } from 'react';
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';

const App = () => {
  const [shoppingItems, setShoppingItems] = useState([]);

  const handleAddItem = (newItem) => {
    setShoppingItems([...shoppingItems, newItem]);
  };

  const calculateTotalCost = () => {
    return shoppingItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Список покупок</h1>
      <ShoppingForm onAddItem={handleAddItem} />
      <ShoppingList items={shoppingItems} totalCost={calculateTotalCost()} />
    </div>
  );
};

export default App;
