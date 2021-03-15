import React from "react"
import Layout from "../layouts"
import Hardware from "../layouts/Hardware"
import { graphql } from 'gatsby'

export default function HardwarePage({data}) {
  console.log(data)
  return <Layout title={data.site.siteMetadata.title}>
    <Hardware />
  </Layout>
}


export const query = graphql`
  query HardwarePageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`