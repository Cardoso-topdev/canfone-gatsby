import React from "react"
import {Helmet} from 'react-helmet'

export default function OrderReview() {
  return <>
  <Helmet>
      <link rel="stylesheet" type="text/css" href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77" />
      <script type="text/javascript" src="https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js"></script>
      <script type="text/javascript" src="js/base.js"></script>
      <script type="text/javascript" src="js/shop.js"></script>
      <script type="text/javascript" src="js/order_view.js"></script>
    </Helmet>
    <div id="shop" className="order-review my-8">
    <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>
  </div>
  </>
}


