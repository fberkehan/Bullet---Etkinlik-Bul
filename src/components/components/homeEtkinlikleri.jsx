import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { getEvents } from '../services/api';

import { Link } from 'react-router-dom';

function HomeEtkinlikleri() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const cachedEvents = localStorage.getItem('events');
            if (cachedEvents) {
                setEvents(JSON.parse(cachedEvents));
                setIsLoading(false);
            } else {
                try {
                    const data = await getEvents();
                    setEvents(data.items);
                    localStorage.setItem('events', JSON.stringify(data.items));
                    setIsLoading(false);
                } catch (error) {
                    console.error('Etkinlikler Alınamadı', error);
                    setIsLoading(false);
                }
            }
        }
    
        fetchData();
    }, []);

    if (isLoading) {
        return <Skeleton variant="rectangular" width={'100vw'} height={'60vh'} />;
    }

    return (
        <div className="row" style={{ gap: '20px', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
          {events.map((event, index) => (
            <Link to={`/etkinlik/${event.id}`} key={index} style={{ marginBottom: '20px', padding: '0', maxWidth: '170px', minHeight: '100px' }} >
              <div className="col-6" style={{ width: '100%', height: '100%' }}>
                <div className="card" style={{ width: '100%', height: '100%', backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                  <img src={event.poster_url} alt={event.name} style={{ borderRadius: '10px' }} />
                  <div className="card-body" style={{ padding: '4px' }}>
                    <h5 className="card-title" style={{ textAlign: 'center' }}>
                      {event.name.length > 30 ? event.name.slice(0, 20) + "..." : event.name}
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
      
}

export default HomeEtkinlikleri;
