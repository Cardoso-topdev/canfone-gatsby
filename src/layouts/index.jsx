import React from "react"
// import { Helmet } from "react-helmet"
import * as containerStyles from "./styles.module.css"
import "../styles/global.css"
import "../styles/application.min.css"
import "../styles/canfone.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Modals from "../components/modals"

export default function Layout({ children, title }) {
  return <div className={containerStyles.container}>
    <Header title={title} />
    <Modals />
    {children}
    <Footer />
  </div>
}