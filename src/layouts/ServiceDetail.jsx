import React from "react"
import FAChat from "../components/fa-chat"
import { Helmet } from 'react-helmet'

export default function ServiceDetail() {
  return <>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77" />
      <script type="text/javascript" src="https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js"></script>
      <script type="text/javascript" src="js/base.js"></script>
      <script type="text/javascript" src="js/shop.js"></script>
      <script type="text/javascript" src="js/service_detail.js"></script>
    </Helmet>
    <div className="header-service-details">
      <div className="ml-4 md:ml-20 pt-40 md:pt-16">
        <h1 className="text-2xl md:text-4xl font-light">Service Details</h1>
        <h1 className="text-base md:text-2xl font-light mt-3">We're Almost Done!</h1>
      </div>
      <div className="ml-4 md:ml-20 pt-8">
        <h4 className="text-base md:text-2xl font-light md:w-1/2">Let's confirm a few service details before submitting your order.</h4>
      </div>
    </div>

    <FAChat />

    <div id="shop" className="my-8">
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    </div>
  </>
}

