import React, { useState } from 'react';
import './../../assets/css/extra.css';
import KonserWidget from '../../assets/img/konser.jpg';
import Earth from '../../assets/img/earth.jpg';
import Tiyatro from '../../assets/img/tiyatro.jpg';
import Sanat from '../../assets/img/sanat.jpg';
import Clock from '../../assets/img/clock.jpg';
import { Link } from 'react-router-dom';
import TimeEvent from './timeEvent';

function SelectCategory() {
    const [showTimeEvent, setShowTimeEvent] = useState(false); 

    const handleDiv4Click = () => {
        setShowTimeEvent(!showTimeEvent); 
    };

    return (
        <div className='selectCategory'>
            <div className='slider'>
                <div style={{ width: 'fit-content', height: '34vh', position: 'relative', margin: 'auto' }}>
                    <img className='image-slider' src={Earth} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'brightness(0.3)' }} />
                    <h1 className='text-slider-main'>Bölgenizdeki Etkinlikler</h1>
                </div>
            </div>

            <div className="container" style={{ margin: 'auto' }}>
                <div className="div1" style={{ backgroundImage: `url(${KonserWidget})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }}>
                    <Link to="/category/300">
                        <h1 className='text-grid text'>Konserler</h1>
                    </Link>
                </div>
                <div className="div2" style={{ backgroundImage: `url(${Sanat})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }}>
                    <Link to="/category/75">
                        <h1 className='text-grid-2 text'>Sanat</h1>
                    </Link>
                </div>
                <div className="div3" style={{ backgroundImage: `url(${Tiyatro})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }}>
                    <Link to="/category/3964">
                        <h1 className='text-grid-3 text'>Tiyatro</h1>
                    </Link>
                </div>
                <div className="div4" style={{ backgroundImage: `url(${Clock})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }} onClick={handleDiv4Click}>
                    <Link to="/timeEvents">
                    <h1 className='text-grid-4 text'>Yakında</h1>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    );
}

export default SelectCategory;