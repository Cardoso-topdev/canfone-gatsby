/*
 * Prep address modal with a Window IIFE and click triggers
 */

// Set up the modal triggers
const modalTriggers = document.querySelectorAll('.modal-popup-trigger');
const bodyBlackout = document.querySelector('.body-blackout');

window.onload= function (){

// Add Order_ID
if (localStorage.getItem('order_id') == null) 
  localStorage.setItem('order_id', getOrderID());

(function(){
  window.updateServiceAddress = function() {
    console.log('Outside function window.test called from within the react component.');
    const popupModal = document.querySelector("[data-popup-modal='availability_check']")
    popupModal.classList.add('is-visible')
    bodyBlackout.classList.add('is-blacked-out')
    
    bodyBlackout.addEventListener('click', () => {
      popupModal.classList.remove('is-visible')
      bodyBlackout.classList.remove('is-blacked-out')
    })
    return false;
  };
}());

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    //console.log("e::", e)
    //console.log("e.target.dataset", e.target.dataset)
    //console.log("e.target.dataset.targetContent", e.target.dataset.targetContent)
    const { popupTrigger } = trigger.dataset
    //console.log("popupTrigger:", popupTrigger)
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)
    popupModal.classList.add('is-visible')
    bodyBlackout.classList.add('is-blacked-out')
    
    bodyBlackout.addEventListener('click', () => {
      popupModal.classList.remove('is-visible')
      bodyBlackout.classList.remove('is-blacked-out')
    })
  })
})

// Add listeners for "Check Address" clicks
document.getElementById("SetServiceAddress").addEventListener("click", function(event) {
  const popupModal = document.querySelector("[data-popup-modal='availability_check']")
  // Catch the event when the service address is set
  let city = document.getElementById('city').value
  let province = document.getElementById('province').value
  let postal_code = document.getElementById('postal_code').value
  let service_address = document.getElementById('service_address_input').value
  let next_page = localStorage.getItem('next_page') || 'internt.html';
  if (service_address.length > 0) {
    localStorage.clear();
    localStorage.setItem('city', city);
    localStorage.setItem('province', province);
    localStorage.setItem('postal_code', postal_code);
    localStorage.setItem('service_address', service_address);

    // After address update, Index moves to the Internet page
    // After address update, other pages also move to the Internet page
    if (window.location.href.indexOf("index.html") > -1) {
      window.location = 'internet.html';
    } else {
      window.location = 'internet.html';
    }
  }
  // Set an expiry time of + 6 hrs and reset pricing string in localStorage to '', it will be 
  // retrieved in the Internet, TV or Phone component
  const now = new Date();
  const ttl = 6 * 3600 * 1000;
  localStorage.setItem('expiry', now.getTime() + ttl);
});

document.getElementById("AddressForm").addEventListener("submit", function(event) {
  event.preventDefault();
}, true);

document.getElementById("AddressForm").addEventListener("onsubmit", function(event) {
  event.preventDefault();
}, true);


/*
 * Load &  Configure the Canada Post (www.loqate.com) Address Completion API
 * Reference the pca function from https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js
 * https://www.loqate.com/resources/support/setup-guides/advanced-setup-guide/
 * https://www.canadapost.ca/pca/support/guides/advanced
 */

const fields = [   
  { element: "city", field: "City", mode: pca.fieldMode.POPULATE },
  { element: "province", field: "Province", mode: pca.fieldMode.POPULATE },
  { element: "postal_code", field: "PostalCode", mode: pca.fieldMode.POPULATE  },
  { element: "service_address", field: "{Line1}{, {Line2}}, {City}, {Province}, {PostalCode}", mode: pca.fieldMode.DEFAULT },
];

let options = {   
  key: "WF19-AY25-TD96-YT85",
  bar: {
    showCountry: false,
    showLogo: false,
    visible: false
  }
}

let addressControl = new pca.Address(fields, options);

/*
 * Start a New Order
 */

let order_started = localStorage.getItem('order_started') || new Date().getTime();
order_started = parseInt(order_started);
localStorage.setItem('order_started', order_started);

/*
 * If last order update is over 1 hr old, clear order, save address 
 * and begin anew
*/
const now = new Date();
//const ttl = 1000 * 60 * 60 // 1 hr
const ttl = 1000 * 60 * 60 * 2; // 2 hrs
//const ttl = 1000 * 60 * 60 * 6 // 6 hrs
//const ttl = 1000 * 60 * 30 // 30 mins
//const ttl = 1000 * 3 // 3s

//console.log("order_started:", order_started);
//console.log("now.getTime():", now.getTime(), typeof now.getTime());
//console.log("order_started + ttl:", order_started + ttl);
//console.log('now.getTime() > order_started + ttl:', now.getTime() > order_started + ttl)

let city = localStorage.getItem('city') || '';
let province = localStorage.getItem('province') || '';
let postal_code = localStorage.getItem('postal_code') || '';
let service_address = localStorage.getItem('service_address') || '';

if ((now.getTime() > order_started + ttl)) {
  localStorage.clear();
  localStorage.setItem('city', city);
  localStorage.setItem('province', province);
  localStorage.setItem('postal_code', postal_code);
  localStorage.setItem('service_address', service_address);
  localStorage.setItem('order_id', getOrderID())
}


/*
 * Generate a unique order ID
*/

// Generate unique IDs for use as pseudo-private/protected names.
// Similar in concept to
// <http://wiki.ecmascript.org/doku.php?id=strawman:names>.
//
// The goals of this function are twofold:
// 
// * Provide a way to generate a string guaranteed to be unique when compared
//   to other strings generated by this function.
// * Make the string complex enough that it is highly unlikely to be
//   accidentally duplicated by hand (this is key if you're using `ID`
//   as a private/protected name on an object).
//
// Use:
//
//     var privateName = ID();
//     var o = { 'public': 'foo' };
//     o[privateName] = 'bar';
function getOrderID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random().toString(36).substr(2, 9).toUpperCase();
};


/*
 * Manage Customer Type
*/

function updateCustomerTypeInNav(customer_type = 'RESIDENTIAL') {
  const business_link = document.getElementById('BusinessLink');
  const residential_link = document.getElementById('ResidentialLink');
  
  if (customer_type == 'RESIDENTIAL') {
    business_link.style.color = '#ffffff';
    residential_link.style.color = '#eb3f35';
  } else {
    business_link.style.color = '#eb3f35';
    residential_link.style.color = '#ffffff';
  }
  console.log("customer_type:", customer_type)
}

// Check if customer_type has been set
let customer_type = localStorage.getItem('customer_type') || '';
// If customer_type == '', set to RESIDENTIAL
if (customer_type == '') {
  customer_type = 'RESIDENTIAL'
  localStorage.setItem('customer_type', customer_type);
}

updateCustomerTypeInNav(customer_type);
// Set event handlers to update local state if either Business or Residentail nav links are clicked
document.getElementById('BusinessLink').addEventListener("click", function(event) {
  // If customer_type = RESIDENTIAL then set Business Nav Link active, clear localStorage, 
  // and reset window.location to 'index.html'
  if (localStorage.getItem('customer_type') === 'RESIDENTIAL') {
    updateCustomerTypeInNav(customer_type);
    let city = localStorage.getItem('city') || '';
    let province = localStorage.getItem('province') || '';
    let postal_code = localStorage.getItem('postal_code') || '';
    let service_address = localStorage.getItem('service_address') || '';
    localStorage.clear();
    localStorage.setItem('city', city);
    localStorage.setItem('province', province);
    localStorage.setItem('postal_code', postal_code);
    localStorage.setItem('service_address', service_address);
    localStorage.setItem('customer_type', 'BUSINESS');
    localStorage.setItem('order_id', getOrderID())
    window.location ='index.html';
  }
});

document.getElementById('ResidentialLink').addEventListener("click", function(event) {
  // If customer_type = BUSINESS then set Business Nav Link active, clear localStorage, 
  // and reset window.location to 'index.html'
  if (localStorage.getItem('customer_type') === 'BUSINESS') {
    updateCustomerTypeInNav(customer_type);
    let city = localStorage.getItem('city') || '';
    let province = localStorage.getItem('province') || '';
    let postal_code = localStorage.getItem('postal_code') || '';
    let service_address = localStorage.getItem('service_address') || '';
    localStorage.clear();
    localStorage.setItem('city', city);
    localStorage.setItem('province', province);
    localStorage.setItem('postal_code', postal_code);
    localStorage.setItem('service_address', service_address);
    localStorage.setItem('customer_type', 'RESIDENTIAL');
    localStorage.setItem('order_id', getOrderID())
    window.location ='index.html';
  }
});





/*
 * Update Pricing
 */

 // API call to redloco.ca for locatoin-specific pricing

 // Update localStorage with prcing info

 // Re-render page



/*
 * Listeners
 */
/*
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById("my-account-btn")) {
    let open_account = document.getElementById("my-account-btn");
    open_account.addEventListener('click', messageReceived);
  }

  resizeNav();
});
*/
/*
document.addEventListener("click", function(event) {
  // Detect all clicks on the document
  if (!event.target.matches('#my-account-btn')) {
    let dropdown_menu = document.getElementById("dropdown-menu");
    if (dropdown_menu.classList.contains('show')) {
      dropdown_menu.classList.remove('show');
    }
  }
});
*/

window.addEventListener('scroll', function(e) {
  requestAnimationFrame(resizeNav);
});

document.getElementById("MobileMenuBtn").addEventListener("click", function(event) {
  // Detect all clicks on the mobile_menu
  console.log("Mobile Menu Button Click");
  //event.stopPropagation();
  const mobile_menu = document.getElementById('MobileMenu');
  mobile_menu.classList.toggle("hidden");
});

// Allow keyboard ESC to close modal
document.onkeydown = function(event) {
  let e = event || window.event;
  var isEscape = false;
  if ("key" in e) {
      isEscape = (e.key === "Escape" || e.key === "Esc");
  } else {
      isEscape = (e.keyCode === 27);
  }
  const popupModal = document.getElementById("availability-check-modal")
  if (isEscape) {
    popupModal.classList.remove('is-visible')
    bodyBlackout.classList.remove('is-blacked-out')
  }
};


/*
 * Basic Functions
 */
function resizeNav() {
  let media_query = window.matchMedia( "(max-width: 640px)" );
  if (!media_query.matches) {
    var Logo = document.getElementById("Logo");
    var Header = document.getElementById("Header");
    var NavLinks = document.getElementById("NavLinks");
    if (window.scrollY > 5 || document.documentElement.scrollTop > 5) {
      if (Logo.classList.contains('header-logo-large') && Header.classList.contains('header-large')) {
        Logo.classList.replace('header-logo-large', 'header-logo-small');
        Header.classList.replace('header-large', 'header-small');
        NavLinks.classList.replace('nav-links-large', 'nav-links-small');
      }
      if (Logo.classList.contains('header-logo-large') && Header.classList.contains('header-large-secondary')) {
        Logo.classList.replace('header-logo-large', 'header-logo-small');
        Header.classList.replace('header-large-secondary', 'header-small-secondary');
        NavLinks.classList.replace('nav-links-large', 'nav-links-small');
      }
    } else {
      if (Logo.classList.contains('header-logo-small') && Header.classList.contains('header-small')) {
        Logo.classList.replace('header-logo-small', 'header-logo-large');
        Header.classList.replace('header-small', 'header-large');
        NavLinks.classList.replace('nav-links-small', 'nav-links-large');
      }
      if (Logo.classList.contains('header-logo-small') && Header.classList.contains('header-small-secondary')) {
        Logo.classList.replace('header-logo-small', 'header-logo-large');
        Header.classList.replace('header-small-secondary', 'header-large-secondary');
        NavLinks.classList.replace('nav-links-small', 'nav-links-large');
      }
    }
  }
}

}