import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarker
} from '@fortawesome/free-solid-svg-icons'
import { 
  Img__mikrotik_hap_724tt
 } from "../utils/imgloader"
 import FAChat from "../components/fa-chat"
import PageHeader from "../components/page-header"
import {Helmet} from 'react-helmet'

export default function Internet() {
  return <>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77" />

      <script type="text/javascript" src="https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js"></script>
      <script type="text/javascript" src="js/base.js"></script>
      <script type="text/javascript" src="js/internet.js"></script>
      <script type="text/javascript" src="js/shop.js"></script>
    </Helmet>
    <div className="header-internet">
      <PageHeader
        title1="Internet Packages"
        title2="Canfone Internet Packages"
        title3="Contract Optional, No Run-Around"
        serviceType="Monthly plans starting from"
        price="$40"
        />
      <div className="ml-4 md:ml-20 pt-1">
        <Link className="text-orange-500 underline" to="/">View Plans</Link>
      </div>
    </div>

    <FAChat />

    <div className="w-4/5 mx-auto my-6 mb-5 border border-gray-800 bg-white rounded">
      <h3 className="text-base p-2 text-white bg-canfone-grey">Showing service availability for:</h3>
      <div className="flex border-t border-gray-400 py-2 w-full">
        <div className="pt-1 px-3 text-2xl text-canfone-red">
          <FontAwesomeIcon icon={faMapMarker} className="mr-2"/>
        </div>
        <div className="flex-1 pt-2 "><h3 id="service-address" className="text-sm md:text-xl"> </h3></div>
        <div className="px-4">
          <button
            type="button"
            className="lg:hidden modal-popup-trigger mt-2 barlow-button-grey px-2 py-1 rounded"
            data-popup-trigger="availability_check">
            Change
          </button>
        </div>
        <div className="hidden lg:block px-4 mt-1">
          <button
            type="button"
            className="modal-popup-trigger barlow-button-grey px-2 md:px-3 py-1 rounded"
            data-popup-trigger="availability_check">
            Change Location
          </button>
        </div>
      </div>
    </div>

    <div id="shop">
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    </div>

    <div className="px-8 pt-16 pb-24">
      <h1 className="text-3xl font-semibold text-steel-blue-600 text-center leading-tight">The Best Gear</h1>
      <h2 className="text-2xl font-light text-steel-blue-400 pt-1 text-center md:px-24">Our team works hard to ensure your wifi coverage is the absolute best</h2>
      <div className="md:flex mx-auto pt-2">
        <div className="p-8 md:w-1/2">
          <img src={Img__mikrotik_hap_724tt} className="mx-auto" alt=""/>
        </div>
        <div className="md:flex-1 px-8 md:pt-12 lg:pt-20">
          <h2 className="text-xl font-semibold uppercase text-steel-blue-600">The right tool for the job</h2>
          <p className="text-base font-normal titlecase text-steel-blue-400 line-height-300 pt-4">We provide customers with top-notch networking gear like the hAP ac2, a dual-band access point that provides wifi coverage for 2.4 GHz and 5 GHz frequencies at the same time.</p>
          <p className="text-base font-normal titlecase text-steel-blue-400 line-height-300 pt-4">Do you have a large area to cover and were wondering about possibly needing wifi extenders? Give us a call and we'll make sure your solution is the right solution..</p>
        </div>
      </div>
    </div>
  </>
}