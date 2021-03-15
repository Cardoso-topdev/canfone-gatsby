import React from "react"
import Layout from "../layouts"
import TOS from "../layouts/TOS"
import { graphql } from 'gatsby'

export default function TosPage({data}) {
  console.log(data)
  return <Layout title={data.site.siteMetadata.title}>
    <TOS />
  </Layout>
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