// homepage.js
import React from 'react';
import CustomSlider from '../components/components/slider';
import HomeEtkinlik from '../components/components/homeEtkinlikleri';
import '../assets/css/custom.css';
import Search from '../components/components/search';

function HomePage() {
  return (
    <div className='homePage'>
      <CustomSlider  />

      <Search />
      <h2 style={{ textAlign: 'center', color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold' }}>Son Etkinlikler</h2>

      <HomeEtkinlik />
    </div>
  );
}

export default HomePage;
