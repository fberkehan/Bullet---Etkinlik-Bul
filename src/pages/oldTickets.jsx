import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../components/services/api';

function OldTickets() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const cachedEvents = localStorage.getItem('cachedEvents');
    
    if (cachedEvents) {

      setEvents(JSON.parse(cachedEvents));
      setIsLoading(false);
    } else {

      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
 
      const response = await getEvents();
      if (response && response.items && Array.isArray(response.items)) {
     
        const currentDate = new Date();
  
        const filteredEvents = response.items.filter(event => new Date(event.end) < currentDate);

     
        localStorage.setItem('cachedEvents', JSON.stringify(filteredEvents));

        setEvents(filteredEvents);
        setIsLoading(false);
      } else {
        console.error('API yanıtı beklenen formatta değil:', response);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Etkinlikler getirilirken bir hata oluştu:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='category'>
      {events.length > 0 ? (
        events.map(event => (
          <Link to={`/etkinlik/${event.id}`} key={event.id}>
            <div className='event'>
              <img src={event.poster_url} alt={event.name} />
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>Tarih: {event.start}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>Tarihi geçmiş etkinlik bulunamadı.</p>
      )}
    </div>
  );
}

export default OldTickets;
