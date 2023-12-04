import React from 'react';
import '../../assets/css/extra.css';
import Maskot from '../../assets/img/bulutLogo.png';
import { Link } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import { sidebarOpener } from '../../assets/js/utils';
import { useData } from '../../ticketManagment'; // useData hook'unu import ediyoruz

function Sidebar() {
  const { events, isLoading, error } = useData(); // useData hook'undan events, isLoading ve error'u kullanıyoruz
  const categoryNames = new Set();

  return (
    <div className='sidebar'>
      <img src={Maskot} alt="Maskot" className='maskot'/>
      {isLoading ? (
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        events.map(event => {
          const categoryName = event.category.name;

          if (!categoryNames.has(categoryName)) {
            categoryNames.add(categoryName);

            return (
              <Link key={event.id} to={`/category/${event.category.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                <div onClick={() => sidebarOpener()} id="categoryDiv" className="otherCategory" style={{ cursor: 'pointer' , color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold', fontSize: '20px', backgroundColor: '#0c2540'}}>
                  <h1 style={{ color: 'white', fontFamily: 'SamsungSharpSans-Bold', fontWeight: 'bold', fontSize: '20px' }}>{categoryName}</h1>
                </div>
              </Link>
            );
          }

          return null; // Eğer kategori zaten eklenmişse, null döndürüyoruz
        })
      )}
    </div>
  );
}

export default Sidebar;
