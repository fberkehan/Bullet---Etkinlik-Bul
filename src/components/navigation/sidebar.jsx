import React, { useState, useEffect } from 'react';
import '../../assets/css/extra.css';
import Maskot from '../../assets/img/bulutLogo.png';
import otherPhoto from '../../assets/img/other.png';
import { Link } from 'react-router-dom';
import { getEvents } from '../services/api'; // getEvents fonksiyonunu kullanacağız
import Skeleton from '@mui/material/Skeleton';
import { sidebarOpener } from '../../assets/js/utils';

function Sidebar() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const cachedEvents = localStorage.getItem('events');
    if (cachedEvents) {
      setEvents(JSON.parse(cachedEvents));
      setIsLoading(false);
    } else {
      getEvents() // Tüm etkinlikleri çekiyoruz
        .then(data => {
          if (data && data.length > 0) {
            setEvents(data);
            localStorage.setItem('events', JSON.stringify(data));
          } else {
            setError('Etkinlik verisi bulunamadı.');
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Etkinlikler alınamadı:', error);
          setError('Etkinlikler yüklenirken bir hata oluştu.');
          setIsLoading(false);
        });
    }
  }, []);

  // Kategori adlarını saklamak için bir set kullanabiliriz
  const categoryNames = new Set();

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
        events.map(event => {
          const categoryName = event.category.name;

          // Eğer kategori adı daha önce eklenmediyse, ekleyin ve etkinliği gösterin
          if (!categoryNames.has(categoryName)) {
            categoryNames.add(categoryName);

            return (
              <Link key={event.id} to={`/category/${event.category.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                <div onClick={() => sidebarOpener()} id="categoryDiv" className="otherCategory" style={{ backgroundImage: `url(${otherPhoto})`, backgroundPosition: 'right', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }}>
                  <h1 style={{ color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold', fontSize: '20px' }}>{categoryName}</h1>
                </div>
              </Link>
            );
          }

          return null; // Aynı kategori adı daha önce eklenmişse, null döndür
        })
      )}
    </div>
  );
}

export default Sidebar;
