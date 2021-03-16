import React from "react"
import {
  Img__phone_72gtg
} from "../utils/imgloader"
import FAChat from "../components/fa-chat"
import CanMap from "../components/canfone-map"
import PageHeader from "../components/page-header"
import { Helmet } from 'react-helmet'

export default function Internet() {
  return <>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77" />

      <script type="text/javascript" src="https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js"></script>
      <script type="text/javascript" src="js/base.js"></script>
      <script type="text/javascript" src="js/phone.js"></script>
      <script type="text/javascript" src="js/shop.js"></script>
    </Helmet>
    <div className="header-phone">
      <PageHeader
        title1="Canfone Phone Packages"
        title2="Crystal Clear, Unlimited Calling"
        serviceType="Monthly plans starting from"
        price="$10"
      />
    </div>

    <FAChat />
    <CanMap />

    <div className="px-4 md:px-8 pt-6 md:pt-16 pb-10 md:pb-24">
      <h1 className="text-2xl md:text-3xl font-semibold text-steel-blue-600 text-center leading-tight">Home & Business Solutions</h1>
      <h2 className="text-base md:text-2xl font-light text-steel-blue-400 pt-1 text-center">Whether it is for home or business use, we have the phone package for you</h2>
      <div className="lg:flex mx-auto pt-2">
        <div className="p-4 md:p-8 lg:w-1/2">
          <img src={Img__phone_72gtg} className="border border-grey-400 shadow-2xl" alt="" />
        </div>
        <div className="lg:flex-1 px-4 md:px-8 pt-4 md:pt-10">
          <h2 className="text-xl font-semibold uppercase text-steel-blue-600">Unlimited Talk</h2>
          <p className="text-base font-normal titlecase text-steel-blue-400 line-height-300 pt-4">All of our plans come with unlimited calling and the crystal clarity we're known for. Stay connected, whether it's for home or business.</p>
          <p className="text-base font-normal titlecase text-steel-blue-400 line-height-300 pt-2">Keeping your existing number is easy and doesn't cost a cent. Grab your most recent phone bill and have it ready as we move through the Service Details section!</p>
        </div>
      </div>
    </div>
  </>
}

