import React, { useState } from 'react';
import { useData } from '../../ticketManagment';

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

      <div id='searchResults' style={{ display: 'flex', flexDirection: 'column', padding: '25px' }}>
        {filteredEvents.map((event) => (
          <div style={{ marginBottom: '20px', padding: '0', color: 'white', fontFamily: 'SamsungSharpSans-Bold' }} key={event.id}>{event.name}</div>
        ))}

      </div>
    </div>
  );
}

export default Search;
