import React, { useState, useEffect } from 'react';
import '../../assets/css/extra.css';
import Maskot from '../../assets/img/bulutLogo.png';
import otherPhoto from '../../assets/img/other.png';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Skeleton from '@mui/material/Skeleton';
import { sidebarOpener } from '../../assets/js/utils';

function Sidebar() {
  const [kategoriler, setKategoriler] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const cachedKategoriler = localStorage.getItem('kategoriler');
    if (cachedKategoriler) {
      setKategoriler(JSON.parse(cachedKategoriler));
      setIsLoading(false);
    } else {
      getCategories()
        .then(data => {
          if (data && data.length > 0) {
            setKategoriler(data);
            localStorage.setItem('kategoriler', JSON.stringify(data));
          } else {
            setError('Kategori verisi bulunamadı.');
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Kategoriler alınamadı:', error);
          setError('Kategoriler yüklenirken bir hata oluştu.');
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div className='sidebar'>
      <img src={Maskot} alt="Maskot" className='maskot'/>
      {isLoading ? (
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        kategoriler.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
            <div onClick={() => sidebarOpener()} id="categoryDiv" className="otherCategory" style={{ backgroundImage: `url(${otherPhoto})`, backgroundPosition: 'right', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }}>
              <h1 style={{ color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold', fontSize: '20px' }}>{category.name}</h1>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Sidebar;