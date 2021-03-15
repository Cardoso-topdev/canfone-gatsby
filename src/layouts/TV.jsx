import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarker
} from '@fortawesome/free-solid-svg-icons'
import {
  Img__family_tv_8E6152AD1267
} from "../utils/imgloader"
import FAChat from "../components/fa-chat"
import PageHeader from "../components/page-header"

export default function Internet() {
  return <>
    <div className="header-tv">
      <PageHeader 
        title1="Unbeatable Digital TV"
        title2="Digital TV at an Unbeatable Price"
        title3="Great Selection, Locals Included"
        serviceType="Monthly basic package"
        price="$35"
        />
      <div className="ml-4 md:ml-20 pt-1">
        <Link className="text-orange-500 underline" to="/">Channel Lineup</Link>
      </div>
    </div>

    <FAChat />

    <div id="canfone-tv" className="w-4/5 mx-auto my-6 mb-8 border border-gray-800">
      <h3 className="text-base p-2 text-white bg-canfone-grey">Great news! Canfone TV is available at:</h3>
      <div className="flex border-t border-gray-400 py-2 w-full">
        <div className="pt-1 px-3 text-2xl text-canfone-red">
          <FontAwesomeIcon icon={faMapMarker}/>
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

    <div className="px-4 md:px-8 pt-6 md:pt-16 pb-10 md:pb-24">
      <h1 className="text-2xl md:text-3xl font-semibold text-steel-blue-600 text-center leading-tight">Take it to the Next Level</h1>
      <h2 className="text-xl md:text-2xl font-light text-steel-blue-400 pt-1 text-center">Build a customized TV experience that is unique to you</h2>
      <div className="lg:flex mx-auto pt-2">
        <div className="p-4 md:p-8 lg:w-1/2">
          <img src={Img__family_tv_8E6152AD1267} className="border border-grey-400 shadow-2xl" alt=""/>
        </div>
        <div className="lg:flex-1 px-4 md:px-8 pt-4 md:pt-10">
          <h2 className="text-xl font-semibold uppercase text-steel-blue-600">Bespoke Television, Oh Yeah!</h2>
          <p className="text-base font-normal titlecase text-steel-blue-400 line-height-300 pt-4">With Canfone TV you build upon a great selection of base channels by adding custom packages to acheive that perfect mix of streaming content.</p>
          <p className="text-base font-normal titlecase text-steel-blue-400 line-height-300 pt-2">Canfone TV requires a minimum 15 Mbps Interent package, so choose your Canfone Internet option accordingly ;)</p>
        </div>
      </div>
    </div>
  </>
}