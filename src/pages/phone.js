import React from "react"
import Layout from "../layouts"
import { graphql } from 'gatsby'
import Phone from "../layouts/Phone"

export default function PhonePage({data}) {
  console.log(data)
  return <Layout title={data.site.siteMetadata.title}>
    <Phone />
  </Layout>
}

export const query = graphql`
  query PhonePageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`