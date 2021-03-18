
exports.onRouteUpdate = props => {
  const { location } = props
  let clsName = "";
  
  switch (location.pathname) {
    case "/account":
      clsName = "account-login font-open-sans"
      break;
    case "/":
      clsName = "font-open-sans"
      break;
    default:
      clsName = "bg-white font-open-sans"
      break;
  }

  window.addEventListener('load', () => {
    document.body.className = clsName; //document.body.className.replace(/\bno-js\b/, '');
  });

}

// exports.onClientEntry = props => {
//   console.log("CLIENT props: ", props)

//   window.addEventListener('load', () => {
//     document.body.className = document.body.className.replace(/\bno-js\b/, '');
//   });

  
//   if ( pathname == "account") {
//     setBodyAttributes({
//       className: "account-login font-open-sans",
//     })
//   }

// }