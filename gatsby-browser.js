
exports.onRouteUpdate = props => {
  const { location, prevLocation } = props
  console.log("onRouteUpdate props: ", props)

  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)

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
    console.log("load: ", document.body.className);

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