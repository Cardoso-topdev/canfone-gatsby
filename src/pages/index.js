import React from "react"
import Layout from "../layouts"
import {  withPrefix, graphql } from 'gatsby'
import HomePage from "../layouts/HomePage"
import {Helmet} from 'react-helmet'

export default function Home({data}) {
  return <>
  <Helmet>
    <link rel="stylesheet" type="text/css" href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77" />
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossOrigin="anonymous"
    />
    <script type="text/javascript" src={withPrefix("js/common/page_init.js")}></script>
    
    <script type="text/javascript" src={withPrefix('https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js')}></script>
    <script type="text/javascript" src={withPrefix('js/base.js')}></script>
    <script type="text/javascript" src={withPrefix('js/index.js')}></script>
  </Helmet>
  <Layout title={data.site.siteMetadata.title}>
    <HomePage />
  </Layout>
  </>
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