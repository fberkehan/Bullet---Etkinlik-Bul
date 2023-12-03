import React from 'react';
import { useShoppingCart } from '../../ticketManagment';

function CartSidebar() {
  const { cartItems, addToCart, removeFromCart } = useShoppingCart();

  const handleAddItem = (item) => {
    addToCart(item);
  };
  const handleRemoveItem = (itemId) => {
    const itemToUpdate = cartItems.find((item) => item.id === itemId);
    
    if (itemToUpdate) {
      if (itemToUpdate.quantity > 1) {
        // Öğenin miktarını bir azalt
        addToCart({ ...itemToUpdate, quantity: itemToUpdate.quantity - 1 });
      } else {
        // Miktar 1 ise, öğeyi tamamen kaldır
        removeFromCart(itemId);
      }
    }
  };
  
  
  

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cartSidebar">
      <h2 style={{ textAlign: 'center', color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold' }}>Sepetiniz</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleRemoveItem(item.id)}>-</button>
            <span style={{ color: 'white' }}>
              {item.quantity} | {item.name} | {item.price} TL
            </span>
            <button onClick={() => handleAddItem(item)}>+</button>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'center', color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold' }}>Total Fiyat: {calculateTotalPrice()} TL</div>
    </div>
  );
}

export default CartSidebar;
