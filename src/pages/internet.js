import React from "react"
import Layout from "../layouts"
import { graphql } from 'gatsby'
import Internet from "../layouts/Internet"

export default function Home({data}) {
  console.log(data)
  return <Layout title={data.site.siteMetadata.title}>
    <Internet />
  </Layout>
}

export const query = graphql`
  query InternetPageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`