const React = require("react")
// Adds a class name to the body element
exports.onRenderBody = props => {
  const {setBodyAttributes, pathname} = props

  // console.log("SSR props: ", props)

  setBodyAttributes({
    className: "bg-white font-open-sans",
  })
}

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }