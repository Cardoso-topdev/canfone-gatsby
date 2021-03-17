//import { CountUp } from 'countup.js';
//import 'waypoints/lib/noframework.waypoints.min.js';
console.log("Up and running - INDEX, hombre...")
$( document ).ready(function() {
const tvOpenTriggers = document.querySelectorAll('.tv-open')
const phoneOpenTriggers = document.querySelectorAll('.phone-open')
const nextPageButtons = document.querySelectorAll(".next-page-btn")
const nextPageLinks = document.querySelectorAll(".next-page-link")

function scrollToTop(e) {
  // Chrome requires returnValue to be set.
  event.returnValue = '';
  // Reset page position
  window.scrollTo(0, 0);
  return null;
}

tvOpenTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    console.log(e.target.dataset.targetContent)
    window.location = "tv"
  })
})

phoneOpenTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    console.log(e.target.dataset.targetContent)
    window.location = "phone"
  })
})

function nextPage(target) {
  // location.href='internet'
  console.log(target)
}

nextPageLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Set next_page target in localStorage
    let next_page = e.target.dataset.nextPage;
    console.log("LinkBB")
    localStorage.setItem('next_page', next_page);
    // Check for customer address in localstorage 
    let service_address = localStorage.getItem('service_address') || '';
    // Show address modal if address is missing, otherwise load 'next_page'
    // Clicking Check in modal will set window.location to 'next_page'
    const popupModal = document.getElementById('availability-check-modal');
    const bodyBlackout = document.querySelector('.body-blackout');
    if (service_address === '') {
      popupModal.classList.add('is-visible');
      bodyBlackout.classList.add('is-blacked-out');
    } else {
      // Jump to target
      //window.removeEventListener('beforeunload', scrollToTop);
      window.location = next_page;
    }
  });
});

nextPageButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Set next_page target in localStorage
    let next_page = e.target.dataset.nextPage;
    console.log("BB")
    localStorage.setItem('next_page', next_page);
    // Check for customer address in localstorage 
    let service_address = localStorage.getItem('service_address') || '';
    // Show address modal if address is missing, otherwise load 'next_page'
    // Clicking Check in modal will set window.location to 'next_page'
    const popupModal = document.getElementById('availability-check-modal');
    const bodyBlackout = document.querySelector('.body-blackout');
    if (service_address === '') {
      popupModal.classList.add('is-visible');
      bodyBlackout.classList.add('is-blacked-out');
    } else {
      // Jump to target
      //window.removeEventListener('beforeunload', scrollToTop);
      window.location = next_page;
    }
  });
});


})