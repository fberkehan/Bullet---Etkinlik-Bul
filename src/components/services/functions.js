import React, { useState, useEffect } from 'react';
import HomePage from '../../pages/homePage';
import { getEventsByCity } from '../services/api';

// Global değişken veriyi saklamak için
let cachedEvents = null;

const SliderApi = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cachedEvents) {
      // Eğer cachedEvents doluysa, API'den tekrar veri çekmeye gerek yok
      setEvents(cachedEvents);
      setIsLoading(false);
    } else {
      // Eğer cachedEvents boşsa, API'den veri çek
      getEventsByCity()
        .then(data => {
          const today = new Date();
          const todayStr = today.toISOString().split('T')[0];
          const filteredEvents = data.items.filter(event => {
            const isToday = event.start && event.start.startsWith(todayStr);
            const isNotDefaultImage = !event.poster_url.startsWith("https://ifyazilim.nyc3.digitaloceanspaces.com/EtkIO/PublicSite/VarsayilanAfisler/");
            return isToday && isNotDefaultImage;
          });
          cachedEvents = filteredEvents; // Veriyi global değişkende sakla
          setEvents(filteredEvents);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Etkinlikler Alınamadı', error);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <HomePage events={events} isLoading={isLoading} />
  );
};

export default SliderApi;
