import React from "react"
import Layout from "../layouts"
import OrderConfirmation from "../layouts/OrderConfirmation"
import {  withPrefix, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function OrderConfirmationPage({data}) {
  return <>
  <Helmet>
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossOrigin="anonymous"
    />
    <script type="text/javascript" src={withPrefix("js/common/page_init.js")}></script>
    
    <script type="text/javascript" src={withPrefix("js/base.js")}></script>
    <script type="text/javascript" src='js/order_confirmation.js'></script>
  </Helmet>
  <Layout title={data.site.siteMetadata.title}>
    <OrderConfirmation />
  </Layout>
  </>
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