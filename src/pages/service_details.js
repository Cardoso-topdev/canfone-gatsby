import React from "react"
import Layout from "../layouts"
import ServiceDetail from "../layouts/ServiceDetail"
import { graphql } from 'gatsby'

export default function ServiceDetailPage({data}) {
  console.log(data)
  return <Layout title={data.site.siteMetadata.title}>
    <ServiceDetail />
  </Layout>
}

export const query = graphql`
  query ServiceDetailPageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`