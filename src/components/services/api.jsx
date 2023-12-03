import axios from 'axios';

const BASE_URL = 'https://backend.etkinlik.io/api/v2';
const API_KEY = '58662aa042385a8456b537d3d01d5be7'; 

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Etkinlik-Token': API_KEY
};



export const getEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`, { headers });

  
    const updatedData = response.data.map(event => ({
      ...event,
      price: Math.floor(Math.random() * 100) 
    }));

    console.log(updatedData);
    return updatedData;
  } catch (error) {
    throw error;
  }
};




export const getEventDetails = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL}/events/${eventId}`, { headers });


    const eventWithPrice = {
      ...response.data,
      price: Math.floor(Math.random() * 1000) 
    };

    return eventWithPrice;
  } catch (error) {
    console.error("Hata Etkinlik Detayı Alınırken: ", error);
    throw error;
  }
};


// Mekan Servisi
export const getVenueDetails = async (venueId) => {
  try {
    const response = await axios.get(`${BASE_URL}/venues/${venueId}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Hata Mekan Detayı Alınırken: ", error);
    throw error;
  }
};

// Tür Servisi
export const getEventTypes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/formats`, { headers });
    return response.data;
  } catch (error) {
    console.error("Hata Etkinlik Türleri Alınırken: ", error);
    throw error;
  }
};

// Kategori Servisi
export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`, { headers });
    return response.data;
  } catch (error) {
    console.error("Hata Kategoriler Alınırken: ", error);
    throw error;
  }
};

// Şehir Servisi
export const getCities = async (eventId) => {
  try {
    const response = await axios.get(`${BASE_URL}/cities/${eventId}`, { headers });
    return response.data;
  } catch (error) {
    console.error("Hata Şehirler Alınırken: ", error);
    throw error;
  }
};




// İlçe Servisi
export const getDistricts = async (cityId) => {
  try {
    const response = await axios.get(`${BASE_URL}/cities/${cityId}/districts`, { headers });
    return response.data;
  } catch (error) {
    console.error("Hata İlçeler Alınırken: ", error);
    throw error;
  }
};

// Semt Servisi
export const getNeighborhoods = async (districtId) => {
  try {
    const response = await axios.get(`${BASE_URL}/districts/${districtId}/neighborhoods`, { headers });
    return response.data;
  } catch (error) {
    console.error("Hata Semtler Alınırken: ", error);
    throw error;
  }
};
