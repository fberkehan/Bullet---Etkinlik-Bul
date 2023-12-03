import moment from 'moment';
import 'moment/locale/tr';

export function cleanHtml(html) {
  // Tüm virgüllerden sonra \n eklemek için replace fonksiyonunu kullanın
  const cleanedHtml = html.replace(/<\/?[^>]+(>|$)/g, "\n");
  return cleanedHtml;
}




export function formatDate(isoString) {
  const momentDate = moment(isoString);

  const formattedDate = momentDate.format('DD/MM/YYYY HH:mm');

  return formattedDate;
}


export function openMap(adres) {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(adres)}`;
  window.open(url, '_blank');
}


export function sidebarOpener() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('activeSidebar');
  const categoryDivs = document.querySelectorAll('#categoryDiv');
  categoryDivs.forEach((div) => {
    div.classList.toggle('textOpener');
  });
}


export function cartSidebarOpener() {
  const sidebar = document.querySelector('.cartSidebar');
  sidebar.classList.toggle('activeSidebar');
}

