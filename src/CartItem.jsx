import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, addItem, removeItem } from '../redux/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name)); // Remove item if quantity is 1
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  // Calculate subtotal for this item
  const calculateTotalCost = () => {
    return (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-item">
      <img className="cart-image" src={item.image} alt={item.name} />
      <div className="cart-details">
        <h3>{item.name}</h3>
        <p>Cost: {item.cost}</p>
        <p>Subtotal: ${calculateTotalCost()}</p>
        <div className="cart-actions">
          <button onClick={handleDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="remove-button" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
