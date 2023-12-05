
import React from 'react';
import { useData } from '../ticketManagment';
import { Link } from 'react-router-dom';


function OldTickets() {
    const { events, isLoading } = useData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const oldEvents = events.filter(event => new Date(event.end) < new Date());

    return (
        <div className='category'>
            {oldEvents.length > 0 ? (
                oldEvents.map(event => (
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
                <p style={{ color: 'white', fontFamily: 'SamsungSharpSans-Bold',marginTop: '20px',textAlign: 'center' }}>Tarihi geçmiş etkinlik bulunamadı.</p>
            )}
        </div>
    );
}

export default OldTickets;
