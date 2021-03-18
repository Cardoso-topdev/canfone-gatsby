import React from "react"
import { GATSBY_IMGS } from "utils/imgloader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

export default function HomePage() {
  return <div className="pb-8 bg-steel-grey-800">
    <div className="md:flex pb-6 md:pb-20">
      <div className="md:w-1/3 pl-10 lg:pl-20 pt-6 md:pt-20">
        <h1 className="text-2xl md:text-3xl text-4xl font-light text-white">Ready to</h1>
        <h1 className="text-2xl md:text-3xl text-4xl font-semibold text-white">Get</h1>
        <h1 className="text-2xl md:text-3xl text-4xl font-semibold text-white">Connected?</h1>
      </div>
      <div className="text-xs md:w-2/3 pt-8 md:pt-20">
        <div className="inline-block align-top px-10 md:px-6">
          <h2 className="text-teal-300 text-lg uppercase pb-2 md:pb-4">Shop</h2>
          <ul className="text-white font-normal">
            <li className="font-light pb-2"><a href="/internet">Internet</a></li>
            <li className="font-light pb-2"><a href="/tv">TV</a></li>
            <li className="font-light pb-2"><a href="/phone">Phone</a></li>
          </ul>
        </div>

        <div className="inline-block align-top px-6">
          <h2 className="text-teal-300 text-lg uppercase pb-2 md:pb-4">Support</h2>
          <ul className="text-white font-normal">
            <li className="font-light pb-2"><a href="/account">Self Service</a></li>
            <li className="font-light pb-2">Chat</li>
            <li className="font-light pb-2">FAQ</li>
          </ul>
        </div>

        <div className="inline-block align-top px-10 md:px-6 pt-4 md:pt-0">
          <h2 className="text-teal-300 text-lg uppercase pb-2 md:pb-4"><a href="/account">My Account</a></h2>
          <ul className="text-white font-normal">
            <li className="font-light pb-2"><a href="/account">My Dashboard</a></li>
            <li className="font-light pb-2"><a href="/account">Setup/Change Banking</a></li>
            <li className="font-light pb-2"><a href="/account">Setup/Change Credit Card</a></li>
            <li className="font-light pb-2"><a href="/account">Make a Payment</a></li>
          </ul>
        </div>

        <div className="inline-block align-top px-10 md:px-6 pt-4 md:pt-0">
          <h2 className="text-teal-300 text-lg uppercase pb-2 md:pb-4">Get in Touch</h2>
          <ul className="text-white font-normal">
            <li className="font-light pb-2">Phone: 1-866-857-3140</li>
            <li className="font-light pb-2">Email: internet@canfone.com</li>
            <li className="font-light pb-2">2209 Rue Saint-Catherine E<br />Montreal, QC H2K 2J3</li>
            <li className="font-light pb-2">All Day, Every Day</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mx-6 md:mx-16 border-t border-gray-700">
      <div className="hidden md:flex items-end pt-4 md:pt-12">
        <div className="pl-4"><img id="Logo" className="header-logo-small" src={GATSBY_IMGS["img/logo_120.png"]} alt="" /></div>
        <div className="flex-1">
          <p className="text-xs text-gray-600 font-light text-center">&copy; 2020-2021 Canfone Inc.</p>
        </div>
        <div className="text-right pr-16">
          <a href="https://www.facebook.com/canfonemtl/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faFacebookSquare}  size="2x"  className="pr-2 text-gray-600"/>
          </a>
          <a href="https://www.instagram.com/canfone_internet/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faInstagram} size="2x" className="rounded-md pr-2 text-2xl text-gray-600"/>
          </a>
        </div>
      </div>
      <div className="flex md:hidden items-end pt-4 md:pt-12">
        <div className="pl-4"><img id="Logo" className="header-logo-small" src={GATSBY_IMGS["img/logo_120.png"]} alt="" /></div>
        <div className="flex-1 text-right pr-4">
          <a href="https://www.facebook.com/canfonemtl/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faFacebookSquare}  size="2x" className="pr-2 text-gray-600"/>
          </a>
          <a href="https://www.instagram.com/canfone_internet/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={faInstagram} size="2x" className="rounded-md pr-2 text-2xl text-gray-600"/>
          </a>
        </div>
      </div>
      <div className="md:hidden pt-6">
        <p className="text-xs text-gray-600 font-light text-center">&copy; 2020-2021 Canfone Inc.</p>
      </div>
    </div>
  </div>
}