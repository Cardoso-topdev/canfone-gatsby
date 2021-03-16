console.log("Live in ORDERS, hombre...");
console.log(localStorage.getItem('service_address'))
$( document ).ready(function() {
const service_address = document.getElementById("Service_Address");
const tally_service_address = document.getElementById("Tally_Service_Address");
const order_stage = 2;

// If on the order submission page
// This is spec'd to either return a reference to the element or null
const submit_order_btn = document.getElementById("Submit-Order");
if (submit_order_btn !== null) {
  submit_order_btn.addEventListener("click", function(event) {
    console.log("Order Submitted");
    // Submit order to RL Engine


    
  });
}

if (service_address !== null) {
  service_address.value = localStorage.getItem('service_address')
}

if (tally_service_address !== null) {
  tally_service_address.innerHTML = localStorage.getItem('service_address')
}
})