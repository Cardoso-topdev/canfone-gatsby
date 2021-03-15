import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faList
} from '@fortawesome/free-solid-svg-icons'
import {Helmet} from 'react-helmet'

import {Logo_120} from "../../utils/imgloader"
// import Logo from "../../img/logo_120.png"

export default function Header({ children, title }) {
  return <>
    <Helmet>
      <title>{title}</title>
      <link rel="stylesheet" type="text/css" href="https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=JH73-CY14-ZK13-GG77" />
      <script type="text/javascript" src="https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js"></script>
      {/* <script type="text/javascript" src="js/base.js"></script> */}
      <script type="text/javascript" src="js/index.js"></script>
    </Helmet>
    <nav id="Header" className="flex header-large px-3 flex text-white">
      <div className="ml-1 md:ml-4">
        <Link to="/"><img id="Logo" className="hidden lg:block header-logo-large" src={Logo_120} alt="logo" /></Link>
        <Link to="/"><img id="Logo" className="lg:hidden header-logo-small" src={Logo_120} alt="logo" /></Link>
      </div>
      <div className="flex-grow text-right">
        <div className="inline-block lg:hidden text-right mt-5 mr-3">
          <button
            id="MobileMenuBtn"
            className="flex items-center px-2 py-1 border rounded text-white text-base border-gray-100 hover:text-canfone-red-light 
        hover:border-canfone-red-light">
            <FontAwesomeIcon icon={faList} />
          </button>
        </div>
        <div id="ResBus" className="hidden lg:block text-right ml-5">
          <span className="text-xl font-semibold text-canfone-red inline-block px-4 py-1">1-866-857-3140</span>
          <span id="BusinessLink" className="business_package cursor-pointer inline-block ml-8 mr-4 py-1">Business</span>
          <span id="ResidentialLink" className="residential_package cursor-pointer inline-block mr-6 py-1">Residential</span>
          <Link to="/" id="lang-fr" className="lang ml-4 mr-5 font-semibold">FR</Link>
        </div>
        <div id="Menu" className="hidden w-full lg:flex lg:items-center lg:w-auto">
          <div id="NavLinks" className="top-nav nav-links-large flex justify-end lg:flex-grow">
            <Link to="/" className="next-page-link top-nav-inactive uppercase block mx-5 lg:inline-block lg:mt-0 text-gray-100 cursor-pointer" data-next-page="internet.html">Internet</Link>
            <Link to="/" className="next-page-link top-nav-inactive uppercase block mx-5 lg:inline-block lg:mt-0 text-gray-100 cursor-pointer" data-next-page="tv.html">TV</Link>
            <Link to="/" className="next-page-link top-nav-inactive uppercase block mx-5 lg:inline-block lg:mt-0 text-gray-100 cursor-pointer" data-next-page="phone.html">Phone</Link>
            <Link to="/" className="next-page-link top-nav-inactive uppercase block mx-5 lg:inline-block lg:mt-0 text-gray-100 cursor-pointer" data-next-page="account.html">Account</Link>
          </div>
        </div>
      </div>
    </nav>
    <div id="MobileMenu" className="hidden mobile-menu w-full lg:hidden">
      <div className="my-3 text-center">
        <div className="mb-5">
          <button className="bg-canfone-red border border-canfone-red text-white font-bold py-2 px-4 mr-6 rounded">
            Residential
      </button>
          <button className="border border-gray-100 text-white font-bold py-2 px-4 rounded">
            Business
      </button>
        </div>
        <Link to="/" className="next-page-link block border-t border-grey-500 py-3 uppercase text-gray-100 cursor-pointer" data-next-page="internet.html">Internet</Link>
        <Link to="/" className="next-page-link block border-t border-grey-500 py-3 uppercase text-gray-100 cursor-pointer" data-next-page="tv.html">TV</Link>
        <Link to="/" className="next-page-link block border-t border-grey-500 py-3 uppercase text-gray-100 cursor-pointer" data-next-page="phone.html">Phone</Link>
        <Link to="/" className="next-page-link block border-t border-grey-500 py-3 uppercase text-gray-100 cursor-pointer" data-next-page="account.html">Account</Link>
      </div>
    </div>

    {/* Body Overlay for Modals */}
    <div className="body-blackout"></div>
  </>
}

