import React, { useEffect }  from 'react';
import Header from './components/navigation/header';
import Sidebar from './components/navigation/sidebar';
import CartSidebar from './components/components/cartSidebar';
import Footer from './components/navigation/footer';
import Categories from './pages/categories';
import OldTickets from './pages/oldTickets';
import ActivityDetails from './pages/details/activityDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './pages/category';
import HomePage from './pages/homePage';
import './assets/fonts/style.css';
import { ShoppingCartProvider, DataProvider } from './ticketManagment';
import PlaceFinder from './components/components/placeFinder';
import { useLocation } from 'react-router-dom';
import TimeEvent from './components/components/timeEvent';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router>
      <ShoppingCartProvider>
        <DataProvider>
          <Header />
          <Sidebar />
          <CartSidebar />
          <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/oldTickets" element={<OldTickets />} />
            <Route path="/timeEvents" element={<TimeEvent />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/etkinlik/:id" element={<ActivityDetails />} />
            <Route path="/place/:slug" element={<PlaceFinder />} />
          </Routes>
          <Footer />
        </DataProvider>
      </ShoppingCartProvider>
    </Router>
  );
}

export default App;
