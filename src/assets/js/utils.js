export function cleanHtml(html) {
  // Tüm virgüllerden sonra \n eklemek için replace fonksiyonunu kullanın
  const cleanedHtml = html.replace(/<\/?[^>]+(>|$)/g, "\n");
  return cleanedHtml;
}

  
//   burası değişecek

  export function formatDate(isoString) {
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ay 0'dan başlar
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  
//   burası değişecek

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
