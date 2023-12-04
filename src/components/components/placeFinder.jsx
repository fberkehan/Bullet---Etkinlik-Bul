import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../../ticketManagment';
import { Link } from 'react-router-dom';

function PlaceFinder() {
  const { slug } = useParams();
  const { events } = useData();

  const filteredEvents = events.filter((event) => event.venue.slug === slug);

  return (
    <div className="category"  style={{paddingTop: '100px'}}>
      <h2 style={{ textAlign: 'center', color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold' }}>{filteredEvents[0]?.venue.name}'daki etkinlikler</h2>
      <ul>
        {filteredEvents.map((event) => (
          <Link to={`/etkinlik/${event.id}`} key={event.id} style={{ marginBottom: '20px', padding: '0', maxWidth: '170px', minHeight: '100px' }}><li style={{ padding: '10px', color: 'white', fontFamily: 'SamsungSharpSans-Bold' }} key={event.id}>{event.name}</li></Link>
        ))}
      </ul>
    </div>
  );
}

export default PlaceFinder;
