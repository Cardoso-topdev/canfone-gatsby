import React from "react"
import Layout from "../layouts"
import Hardware from "../layouts/Hardware"
import { withPrefix, graphql } from 'gatsby'
import {Helmet} from 'react-helmet'
import "../components/shop"

export default function HardwarePage({data}) {
  return <>
  <Helmet>
    <link rel="stylesheet" type="text/css" href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77" />
     
    <script type="text/javascript" src={withPrefix("js/common/page_init.js")}></script>
    <script type="text/javascript" src={withPrefix("js/common/modal_init.js")}></script>

    <script type="text/javascript" src={withPrefix("https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js")}></script>
    <script type="text/javascript" src={withPrefix("js/base.js")}></script>
  </Helmet>
  <Layout title={data.site.siteMetadata.title} lang="en">
    <Hardware  intro={data.allPrismicHomeP.edges[0].node.data.intro_content[0]} lang="en" />
  </Layout>
  </>
}

export const query = graphql`
  query HardwarePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allPrismicHomeP(filter: {lang: {eq: "en-us"}, tags: {in: "hardware"}}) {
      edges {
        node {
          data {
            intro_content {
              start_price
              intro_title {
                text
              }
              intro_subtitle {
                text
              }
              intro_desc_lists {
                text
              }
              img_intro_hero {
                url
              }
            }
          }
        }
      }
    }
  }
`