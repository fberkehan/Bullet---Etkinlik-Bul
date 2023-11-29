import React from 'react';
import './../../assets/css/extra.css';
import KonserWidget from '../../assets/img/konser.jpg';
import Earth from '../../assets/img/earth.jpg';
import Tiyatro from '../../assets/img/tiyatro.jpg';
import Sanat from '../../assets/img/sanat.jpg';
import Clock from '../../assets/img/clock.jpg';

function SelectCategory() {




    return (
        <div className='selectCategory'>
             <div className='slider'>
                <div style={{ width: 'fit-content', height: '34vh' ,position:'relative', margin:'auto'}}>
                    <img className='image-slider' src={Earth} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'brightness(0.3)' }}/>
                    <h1 className='text-slider-main'>Bölgenizdeki Etkinlikler</h1>
                </div>
            </div>

            <div className="container" style={{ margin: 'auto' }}>
                <div className="div1" style={{ backgroundImage: `url(${KonserWidget})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }}>
                    <h1 className='text-grid'>Konserler</h1>
                </div>
                <div className="div2" style={{ backgroundImage: `url(${Sanat})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }}>
                    <h1 className='text-grid-2'>Sanat</h1>
                </div>
                <div className="div3" style={{ backgroundImage: `url(${Tiyatro})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }}>
                    <h1 className='text-grid-3'>Tiyatro</h1>
                </div>
                <div className="div4" style={{ backgroundImage: `url(${Clock})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'brightness(1)' }}>
                    <h1 className='text-grid-4'>Yakında</h1>
                </div>


            </div>


        </div>
    );
}

export default SelectCategory;
