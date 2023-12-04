import React from 'react';
import { useShoppingCart } from '../../ticketManagment';

function CartSidebar() {
  const { cartItems } = useShoppingCart();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cartSidebar">
      <h2 style={{ textAlign: 'center', color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold' }}>Sepetiniz</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} style={{ color: 'white',fontSize: '15px', fontFamily: 'Samsung Sharp Sans Regular', fontWeight: 'bold', listStyle: 'none', marginTop: '20px' }}>
            {item.quantity} Adet | {item.name} | {item.price} TL
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'center', color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold' }}>
        Toplam Fiyat: {calculateTotalPrice()} TL
      </div>
    </div>
  );
}

export default CartSidebar;
