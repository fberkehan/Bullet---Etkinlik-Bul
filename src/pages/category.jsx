import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getEvents } from '../components/services/api';
import Slider from 'react-slick';

// Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Category() {
  const { categoryId } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        if (response && response.items && Array.isArray(response.items)) {
          const categoryIdNum = parseInt(categoryId, 10);
          const filteredEvents = response.items.filter((event) =>
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true, // Slider'ın içeriğe otomatik olarak uyum sağlaması için
    centerMode: true, // Slider'ın ortalanmış şekilde görünmesi için
  };

  return (
    <div style={{ textAlign: 'center',position: 'fixed'}} className='category'>
      <Slider {...settings}>
        {events.map((event) => (
          <div key={event.id}>
            <Link to={`/etkinlik/${event.id}`} style={{ textDecoration: 'none' }}>
              <div className="" style={{ position: 'relative', height: '90vh' }}>
                <img
                  src={event.poster_url}
                  alt={event.name}
                  style={{ objectFit: 'cover', width: '100%', height: '70%', position: 'absolute', top: '0', left: '0',filter: 'brightness(50%)',borderRadius:'50px',border:'2px solid white'}}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '72%',
                    color: 'white',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                  }}
                >
                  <h2 style={{ textAlign: 'center', color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold' }}>{event.name}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;
