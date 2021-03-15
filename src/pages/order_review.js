import React from "react"
import Layout from "../layouts"
import OrderReview from "../layouts/OrderReview"
import { graphql } from 'gatsby'

export default function OrderReviewPage({data}) {
  console.log(data)
  return <Layout title={data.site.siteMetadata.title}>
    <OrderReview />
  </Layout>
}

export const query = graphql`
  query OrderReviewPageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`