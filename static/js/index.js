//import { CountUp } from 'countup.js';
//import 'waypoints/lib/noframework.waypoints.min.js';
console.log("Up and running - INDEX, hombre...")
$( document ).ready(function() {
const tvOpenTriggers = document.querySelectorAll('.tv-open')
const phoneOpenTriggers = document.querySelectorAll('.phone-open')
const nextPageButtons = document.querySelectorAll(".next-page-btn")
const nextPageLinks = document.querySelectorAll(".next-page-link")

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/5ed2aa0fc75cbf1769f0de03/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

(function (o) { var b = "https://api.autopilothq.com/anywhere/", t = "2097f1f7723444569a52a018c5d397281c52b020e007489488e4d2a41a3c84d1", a = window.AutopilotAnywhere = { _runQueue: [], run: function () { this._runQueue.push(arguments); } }, c = encodeURIComponent, s = "SCRIPT", d = document, l = d.getElementsByTagName(s)[0], p = "t=" + c(d.title || "") + "&u=" + c(d.location.href || "") + "&r=" + c(d.referrer || ""), j = "text/javascript", z, y; if (!window.Autopilot) window.Autopilot = a; if (o.app) p = "devmode=true&" + p; z = function (src, asy) { var e = d.createElement(s); e.src = src; e.type = j; e.async = asy; l.parentNode.insertBefore(e, l); }; y = function () { z(b + t + '?' + p, true); }; if (window.attachEvent) { window.attachEvent("onload", y); } else { window.addEventListener("load", y, false); } })({});

!function (f, b, e, v, n, t, s) {
  if (f.fbq) return; n = f.fbq = function () {
    n.callMethod ?
    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '688518877945597');
fbq('track', 'PageView');


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