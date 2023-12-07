import React, { useState } from 'react';
import { useData } from '../../ticketManagment';
import { Link } from 'react-router-dom';



function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const { events } = useData(); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = searchQuery
    ? events.filter((event) => event.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];


  return (
    <div style={{ marginBottom: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
      <input  
      style={{ 
        width: '300px', 
        height: '50px', 
        borderRadius: '5px', 
        textAlign: 'center', 
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontFamily: 'SamsungSharpSans-Bold',
        border: '2px solid white',
        
    }}
        type="text" 
        placeholder="Ara..." 
        value={searchQuery}
        onChange={handleSearchChange}
      />


      </div>
     

      <div id='searchResults' style={{ display: 'flex', flexDirection: 'column', padding: '25px' }}>
        {filteredEvents.map((event) => (
          <Link to={`/etkinlik/${event.id}`} key={event.id}><div style={{ marginBottom: '20px', padding: '0', color: 'white', fontFamily: 'SamsungSharpSans-Bold' }} key={event.id}>{event.name}</div></Link>
        ))}

      </div>
    </div>
  );
}

export default Search;
