import React from 'react';
import Header from './components/navigation/header';
import Sidebar from './components/navigation/sidebar';
import CartSidebar from './components/components/cartSidebar';
import Footer from './components/navigation/footer';
import Categories from './pages/categories';
import OldTickets from './pages/oldTickets';
import EtkinlikDetails from './pages/details/etkinlikDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './pages/category';
import HomePage from './pages/homePage';
import './assets/fonts/style.css';
import { ShoppingCartProvider, DataProvider } from './ticketManagment';


function App() {
  return (
    <Router>
      <ShoppingCartProvider>
        <DataProvider>
          <Header />
          <Sidebar />
          <CartSidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/oldTickets" element={<OldTickets />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/etkinlik/:id" element={<EtkinlikDetails />} />
          </Routes>
          <Footer />
        </DataProvider>
      </ShoppingCartProvider>
    </Router>
  );
}

export default App;
