 
// If there is no address in localStorage activate the availability-check modal
const popupModal = document.getElementById('availability-check-modal');
const bodyBlackout = document.querySelector('.body-blackout');
console.log("localStorage.getItem('service_address'):", localStorage.getItem('service_address'))
if (localStorage.getItem('service_address') == null || localStorage.getItem('service_address') === '') {
  popupModal.classList.add('is-visible')
  bodyBlackout.classList.add('is-blacked-out')
  
  bodyBlackout.addEventListener('click', () => {
    popupModal.classList.remove('is-visible')
    bodyBlackout.classList.remove('is-blacked-out')
  })  
}

// Update page content
let service_addr = localStorage.getItem('service_address');
let ele_service_addr = document.getElementById("service-address")
if ( ele_service_addr){
  ele_service_addr.innerHTML = service_addr;
}