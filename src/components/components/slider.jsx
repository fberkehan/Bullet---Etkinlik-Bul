import React, { useState, useEffect } from 'react';
import TouchDragSlider from 'react-touch-drag-slider';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import './../../assets/css/slider.css';
import './../../assets/css/extra.css';
import { useData, DataProvider } from '../../ticketManagment';

function CustomSlider() {
  const { events, isLoading } = useData();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [events]);

  if (isLoading) {
    return <Skeleton variant="rectangular" width={'100vw'} height={'60vh'} />;
  }

  return (
    <DataProvider>
      <div className="slider contentBox">
        <h2
          style={{
            color: "white",
            fontFamily: "SamsungSharpSans-Bold",
            fontWeight: "bold",
          }}
        >
          Popüler Etkinlikler
        </h2>
        <TouchDragSlider
          activeIndex={activeIndex}
          threshHold={100}
          transition={0.3}
          scaleOnDrag={true}
          onNext={() =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % events.length)
          }
        >
          {events.map((event, index) => (
            <div key={index} className="slide-content" style={{ width: "100%" }}>
              <Link to={`/etkinlik/${event.id}`}>
                <img
                  className="image-slider"
                  src={event.poster_url}
                  alt={event.name}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    filter: "brightness(0.4)",
                  }}
                />
                <div>
                  <h1 className="text-slider">{event.name.slice(0, 40)}...</h1>

                </div>
              </Link>
            </div>
          ))}
        </TouchDragSlider>
      </div>
    </DataProvider>
  );
}

export default CustomSlider;

