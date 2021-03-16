import React from "react"
import Layout from "../layouts"
import {  withPrefix, graphql } from 'gatsby'
import Internet from "../layouts/Internet"
import {Helmet} from 'react-helmet'

export default function Home({data}) {
  console.log(data)
  return <>
  <Helmet>
    <link rel="stylesheet" type="text/css" href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77" />
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossOrigin="anonymous"
    />
    <script type="text/javascript" src={withPrefix("https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js")}></script>
    <script type="text/javascript" src={withPrefix("js/base.js")}></script>
    <script type="text/javascript" src={withPrefix("js/internet.js")}></script>
    <script type="text/javascript" src={withPrefix("js/shop.js")}></script>
  </Helmet>
  <Layout title={data.site.siteMetadata.title}>
    <Internet />
  </Layout>
  </>
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