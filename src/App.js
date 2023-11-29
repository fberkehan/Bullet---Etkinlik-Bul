import Header from './components/navigation/header';
import Sidebar from './components/navigation/sidebar';
import Footer from './components/navigation/footer';
import Categories from './pages/categories';
import EtkinlikDetails from './pages/details/etkinlikDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Category from './pages/category';
import HomePage from './pages/homePage';

import './assets/fonts/style.css';



function App() {
 


  return (
    <Router>
      <Header />
      <Sidebar />


      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/etkinlik/:id" element={<EtkinlikDetails />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
