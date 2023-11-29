import React from 'react'
import { Link } from 'react-router-dom';
import './../../assets/css/footer.css';

function footer() {
  return (
    <div className='footer'>
    <div className='footer-notch'></div>
    <ul>
      <li><Link to="/"><i className="fas fa-home"></i></Link></li>
      <li><Link to="/categories"><i className="fas fa-ticket-alt"></i></Link></li>
      <li><i className="fas fa-qrcode qrcode"></i></li>
      <li><i class="fa-solid fa-clock"></i></li>
      <li><i className="fas fa-envelope"></i></li>
    </ul>
</div>
  )
}

export default footer
