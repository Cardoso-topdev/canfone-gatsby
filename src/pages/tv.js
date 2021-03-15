import React from "react"
import Layout from "../layouts"
import { graphql } from 'gatsby'
import TV from "../layouts/TV"

export default function Home({data}) {
  console.log(data)
  return <Layout title={data.site.siteMetadata.title}>
    <TV />
  </Layout>
}

export const query = graphql`
  query TVPageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`