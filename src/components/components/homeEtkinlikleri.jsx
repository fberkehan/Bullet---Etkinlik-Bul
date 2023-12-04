import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { useData, DataProvider } from '../../ticketManagment';
import { Link } from 'react-router-dom';

function HomeEtkinlikleri() {
    const { events, isLoading } = useData();

    if (isLoading) {
        return <Skeleton variant="rectangular" width={'100vw'} height={'60vh'} />;
    }

    return (
        <DataProvider>
        <div className="row" style={{ gap: '20px', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
            {events.map((event, index) => (
                <Link to={`/etkinlik/${event.id}`} key={index} style={{ marginBottom: '20px', padding: '0', maxWidth: '170px', minHeight: '100px' }}>
                    <div className="col-6" style={{ width: '100%', height: '100%' }}>
                        <div className="card" style={{ width: '100%', height: '100%', backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                            <img src={event.poster_url} alt={event.name} style={{ borderRadius: '10px' }} />
                            <div className="card-body" style={{ padding: '4px' }}>
                                <h5 style={{fontSize: '17px',textAlign: 'center', fontWeight: 'bold', fontFamily: 'Samsung Sharp Sans Regular Regular', marginTop: '10px' }}>
                                    {event.name.length > 30 ? event.name.slice(0, 20) + "..." : event.name}
                                </h5>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        </DataProvider>

    );
}

export default HomeEtkinlikleri;
