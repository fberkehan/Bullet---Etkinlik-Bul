import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getEvents } from '../components/services/api';

function Category() {
  const { categoryId } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        if (response && response.items && Array.isArray(response.items)) {
          const categoryIdNum = parseInt(categoryId, 10);
          const filteredEvents = response.items.filter(event =>
            event.category && event.category.id === categoryIdNum
          );
          setEvents(filteredEvents);
        } else {
          console.error('API yanıtı beklenen formatta değil:', response);
        }
      } catch (error) {
        console.error('Etkinlikler getirilirken bir hata oluştu:', error);
      }
    };

    fetchEvents();
  }, [categoryId]);

  return (
    <div className="category" style={{ paddingTop: '90px', maxWidth: '100%' }}>
      <div className="">
      {events.map(event => (
  <div key={event.id} className="col-sm-6" style={{ marginBottom: '20px' }}>
    <Link to={`/etkinlik/${event.id}`} style={{ textDecoration: 'none' }}>
      <div className="event" style={{ position: 'relative' }}>
        <img
          src={event.poster_url}
          alt={event.name}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
        />
        <div style={{ position: 'absolute', bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px', width: '100%' }}>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
        </div>
      </div>
    </Link>
  </div>
))}

      </div>
    </div>
  );
}

export default Category;
