import React from "react"
import Layout from "../layouts"
import { graphql } from 'gatsby'
import HomePage from "../layouts/HomePage"

export default function Home({data}) {
  console.log(data)
  return <Layout title={data.site.siteMetadata.title}>
    <HomePage />
  </Layout>
}


export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`