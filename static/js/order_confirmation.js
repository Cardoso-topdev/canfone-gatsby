
  const menu = document.getElementById('menu');
  const toggle = () => menu.classList.toggle("hidden");
  document.getElementById("order_reference").innerHTML = localStorage.getItem("order_id"); 
