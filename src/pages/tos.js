import React from "react"
import Layout from "../layouts"
import TOS from "../layouts/TOS"
import {  withPrefix, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function TosPage({data}) {
  console.log(data)
  return <>
  <Helmet>
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossOrigin="anonymous"
    />
    <script type="text/javascript" src={withPrefix("js/base.js")}></script>
    <script type="text/javascript" src='js/tos.js'></script>
  </Helmet>
  <Layout title={data.site.siteMetadata.title}>
    <TOS />
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