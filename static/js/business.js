console.log("Phone, hombre...")

// Update page content
$( document ).ready(function() {

let service_address = localStorage.getItem('service_address');
document.getElementById("service-address").innerHTML = service_address;
})