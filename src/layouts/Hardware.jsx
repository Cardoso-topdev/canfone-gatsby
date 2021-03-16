import React from "react"
import CanMap from "../components/canfone-map"
import FAChat from "../components/fa-chat"
import PageHeader from "../components/page-header"
import {Helmet} from 'react-helmet'

export default function Hardware() {
  return <>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77" />

      <script type="text/javascript" src="https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js"></script>
      <script type="text/javascript" src="js/base.js"></script>
      <script type="text/javascript" src="js/hardware.js"></script>
      <script type="text/javascript" src="js/shop.js"></script>
    </Helmet>
    <div className="header-hardware">
      <PageHeader 
        title1="Hardware Options"
        title2="It's time to select your gear"
        serviceType="Monthly plans starting from"
        price="$10"
        />
    </div>
    
    <FAChat />
    <CanMap />
  </>
}