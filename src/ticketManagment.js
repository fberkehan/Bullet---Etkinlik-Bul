import React, { createContext, useContext, useState, useEffect } from 'react';
import { getEvents, getCategories} from './components/services/api';


const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [qrCode, setQrCode] = useState(null);


  const addToCart = (ticket) => {
    const existingItem = cartItems.find((item) => item.id === ticket.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]); 
    } else {
      setCartItems([...cartItems, { ...ticket, quantity: 1 }]);
    }
  };
  

  const removeFromCart = (ticketId) => {
    const updatedCart = cartItems.filter((ticket) => ticket.id !== ticketId);
    setCartItems(updatedCart);
  };

  const generateQrCode = (tickets) => {

    const qrCodeData = JSON.stringify(tickets);
    setQrCode(qrCodeData);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        generateQrCode,
        qrCode,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('test');
  }
  return context;
}














const DataContext = createContext();

export function DataProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  // Diğer veri türleri için state'ler
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAllData() {
      setIsLoading(true);
      try {
        const eventsData = await getEvents();
        setEvents(eventsData.items);
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        // Diğer veri türleri için API çağrıları
      } catch (error) {
        console.error('Veri yükleme hatası', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        events,
        categories,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('DataContext içinde kullanılmalıdır');
  }
  return context;
}


