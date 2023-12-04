import React from 'react'
import { Link } from 'react-router-dom';
import './../../assets/css/footer.css';

function toggleFullScreen() {
  const doc = window.document;
  const docEl = doc.documentElement;

  const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  const exitFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    exitFullScreen.call(doc);
  }
}
function footer() {
  return (
    <div className='footer'>
    <div className='footer-notch'></div>
    <ul className='ulFooter'>
      <li className='liFooter'><Link to="/"><i className="fas fa-home"></i></Link></li>
      <li className='liFooter'><Link to="/categories"><i className="fas fa-ticket-alt"></i></Link></li>
      <li className='liFooter' onClick={toggleFullScreen}><i className="fas fa-qrcode qrcode"></i></li>
      <li className='liFooter'><Link to="/oldTickets"><i className="fas fa-clock"></i></Link></li>
      <li className='liFooter'><i className="fas fa-envelope"></i></li>
    </ul>
</div>
  )
}

export default footer
