import React from "react"
import Layout from "../layouts"
import OrderConfirmation from "../layouts/OrderConfirmation"
import { graphql } from 'gatsby'

export default function OrderConfirmationPage({data}) {
  console.log(data)
  return <Layout title={data.site.siteMetadata.title}>
    <OrderConfirmation />
  </Layout>
}

export const query = graphql`
  query OrderConfirmationPageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`