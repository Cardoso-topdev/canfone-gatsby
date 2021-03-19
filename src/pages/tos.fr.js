import React from "react"
import Layout from "../layouts"
import TOS from "../layouts/TOS"
import {  graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function TosPage({data}) {
  return <>
  <Helmet>
     
  </Helmet>
  <Layout title={data.site.siteMetadata.title} lang="fr">
    <TOS lang="fr"/>
  </Layout>
  </>
}

export const query = graphql`
  query TosFRPageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`