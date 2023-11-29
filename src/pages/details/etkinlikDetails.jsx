import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cleanHtml, formatDate, openMap } from '../../assets/js/utils'; // Fonksiyonları import ediyoruz
import { getEventDetails } from '../../components/services/api';

//leaflet map ekle

import { Skeleton } from '@mui/material';

function EtkinlikDetails() {
  const [eventDetails, setEventDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEventDetails(id)
        .then((data) => {
          console.log('Etkinlik detayları:', data);
          setEventDetails(data);
        })
        .catch((error) => {
          console.error('Etkinlik detayları alınırken bir hata oluştu:', error);
        });
    }
  }, [id]);

  const isEventPassed = () => {
    const now = new Date();
    const endDate = new Date(eventDetails?.end);
    return endDate < now;
  };

  if (!eventDetails) {
    return (
      <div className='etkinlikDetails' style={{ textAlign: 'center',margin:'auto' }}>
        <Skeleton variant="text" width={280} height={60} />
        <Skeleton variant="rectangular" width={'93vw'} height={'60vh'} />
        <Skeleton variant="text" width={280} height={60} />
        <Skeleton variant="text" width={280} height={60} />
        <Skeleton variant="text" width={280} height={60} />
      </div>
    );
  }
  const latitude = eventDetails?.venue?.lat;
  const longitude = eventDetails?.venue?.lng;

  return (
    <div className='etkinlikDetails' style={{ textAlign: 'center' }}>
      <br />
      <h1 style={{ color: 'white', fontWeight: 'bold' }}>{cleanHtml(eventDetails.name)}</h1>
      <br />
      <img className='image-slider' src={eventDetails.poster_url} alt={eventDetails.name} />
      <br />
      <br />
      <p style={{ color: 'white', padding: '10px', fontWeight: 'bold', backgroundColor: '#131a30' }}>Kategori: {cleanHtml(eventDetails.category?.name)}</p>
  
      <p style={{ color: 'white', padding: '10px', whiteSpace: 'pre-wrap' }}>{cleanHtml(eventDetails.content)}</p>
      <p style={{ color: 'white', padding: '10px', fontWeight: 'bold', backgroundColor: '#163b30' }}>Nerede, Ne Zaman?</p>
      <p style={{ color: 'white', padding: '10px' }}><i className="fa-solid fa-map-pin"></i> Adres:<br /> {cleanHtml(eventDetails.venue?.name)}<br />{cleanHtml(eventDetails.venue?.city?.name + ', ' + eventDetails.venue?.district?.name)}</p>
      <p style={{ color: 'white', padding: '10px' }}><i className="fa-solid fa-clock"></i> Başlangıç Tarihi: {formatDate(eventDetails.start)}<br /><i className="fa-solid fa-clock"></i> Bitiş Tarihi: {formatDate(eventDetails.end)}</p>
  
      {latitude !== "0.000000" && longitude !== "0.000000" && latitude !== undefined && longitude !== undefined && latitude !== null && longitude !== null && (
  <iframe
    src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=TR&z=14&output=embed`}
    width={'100%'}
    height={250}
    style={{ border: 0, marginBottom: '30px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
)}
{!(latitude !== "0.000000" && longitude !== "0.000000" && latitude !== undefined && longitude !== undefined && latitude !== null && longitude !== null) && (
  <iframe
    width="100%"
    height="250px"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen=""
    referrerPolicy="no-referrer-when-downgrade"
    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAFJg9HGQin84wH5y1zkjLE0NiZbeKqStc&q=${encodeURI(eventDetails.venue?.name + ', ' + eventDetails.venue?.city?.name + ', ' + eventDetails.venue?.district?.name)}`}
  ></iframe>
)}
  
      {isEventPassed() ? (
        <>
          <h1 style={{ color: 'white' }}>Bu etkinliğin tarihi geçmiş</h1>
          <div className="btn-group" role="group" aria-label="butonlar">
            <button type="button" className="btn btn-primary" disabled>
              <i className="fa-solid fa-phone"></i> Telefon
            </button>
            <button type="button" className="btn btn-success" disabled>
              <i className="fa-solid fa-map-location-dot"></i> Konuma Git
            </button>
            <button type="button" className="btn btn-warning" disabled>
              <i className="fa-solid fa-ticket"></i> Satın Al
            </button>
          </div>
        </>
      ) : (
    <div>
      <div className="btn-group" role="group" aria-label="butonlar">
        <button type="button" className="btn btn-primary">
          <i className="fa-solid fa-phone"></i> Telefon
        </button>
        <button type="button" className="btn btn-success" onClick={() => openMap(cleanHtml(eventDetails.venue?.name) +' '+cleanHtml(eventDetails.venue?.city?.name+', '+eventDetails.venue?.district?.name))}>
          <i className="fa-solid fa-map-location-dot"></i> Konuma Git
        </button>
        <button type="button" className="btn btn-warning">
          <i className="fa-solid fa-ticket"></i> Satın Al
        </button>
      </div>
    </div>
  )
}


      
    </div>
  );
}

export default EtkinlikDetails;
