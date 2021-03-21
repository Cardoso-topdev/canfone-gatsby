import React from "react"

import Layout from "../layouts"

const NotFoundPage = (anything) => console.log(anything) || (
  <Layout lang="fr">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage