import React from "react"
import Layout from "../layouts"
import TOS from "../layouts/TOS"
import {  graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function TosPage({data}) {
  return <>
  <Helmet>
     
  </Helmet>
  <Layout title={data.site.siteMetadata.title} lang="en">
    <TOS lang="en" />
  </Layout>
  </>
}

export const query = graphql`
  query TosPageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`