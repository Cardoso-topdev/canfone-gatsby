import React from "react"
import { 
  Img__download_200,
  Img__download_500,
  Img__download_800,
  Img__infinity_500,
  Img__devices_200 } from "../utils/imgloader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import LandingSection from "components/landing-section"

export default function HomePage({intro, section, lang}) {
  console.log("Homepage, Prismic Data: ", intro, section[1].section_content)
  return <>
    <div className="header-landing">
      <div className="py-64 pl-8 md:w-3/5 md:py-40 md:pl-24">
        <h1 className="text-3xl lg:text-5xl text-white font-semibold">{intro.intro_title[0].text}</h1>
        <h1 className="hidden md:block text-2xl lg:text-3xl text-white font-semibold">{intro.intro_subtitle[0].text}</h1>
        {intro.intro_desc_lists.map(({text}, idx)=>{
          if ( idx === 0)
            return <h2 className="text-lg lg:text-xl text-white pt-6 pl-6" key={idx}><span className="text-canfone-teal px-2">+</span>{text}</h2>
          else 
            return <h2 className="text-lg lg:text-xl text-white pl-6" key={idx}><span className="text-canfone-teal px-2">+</span>{text}</h2>
        } )}
        <h2 className="text-lg lg:text-xl text-white uppercase pr-2 pt-4 md:pt-6 pb-2 md:pb-16">Starting at<span className="text-canfone-teal-200 text-3xl md:text-5xl lg:text-6xl font-bold pl-2 md:pl-4">${intro.start_price}</span><span className="text-base gray-300 normal-case">/month</span></h2>
        <div className="pl-2 hidden md:block">
          <button
            data-next-page="internet"
            className="shop-internet-btn next-page-btn text-white text-xl font-semi-bold py-3 px-5 rounded-full"
          >
            Shop Internet
          </button>
        </div>
      </div>
    </div>

    <div className="headline lg:block py-6 lg:py-8">
      <div>
        <h2 className="text-gray-300 font-medium text-2xl lg:text-4xl px-16 uppercase text-center">No worry internet, phone and TV service.</h2>
        <div className="text-center pt-3">
          <button
            type="button"
            className="modal-popup-trigger barlow-button-red text-base lg:text-xl text-white py-1 lg:py-2 px-2 lg:px-4 rounded"
            data-popup-trigger="availability_check"
            data-target-content="INTERNET">
            Check Availability
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white pt-6 lg:pt-20">
      <h1 className="text-2xl md:text-4xl font-bold uppercase text-steel-blue-600 text-center leading-tight">Best Ever Pricing on all</h1>
      <h1 className="text-2xl md:text-4xl font-bold uppercase text-steel-blue-600 text-center leading-tight mb-6 lg:mb-12">Internet packages</h1>
      <div className="lg:flex lg:justify-between px-6 lg:px-20 pb-6 lg:pb-16">
        <div className="border border-gray-400 rounded md:w-1/2 mx-auto lg:w-1/3 lg:mx-3 lg:mt-10 mb-6 bg-white">
          <h2 className="text-3xl font-semibold text-center grey-700 pt-2 lg:pt-4">Basic</h2>
          <h3 className="text-base font-normal uppercase text-center grey-500 tracking-wider pb-2 lg:pb-6">Internet</h3>
          <h2 className="text-lg font-light grey-800 text-center pb-2 lg:pb-6">From <span className="text-4xl align-top">$</span><span className="text-5xl">40</span> /month</h2>
          <div className="flex items-center border-t border-b border-gray-300 mx-3 py-2">
            <div className="w-20 text-center"><img alt="" src={Img__download_200} className="mx-auto" /></div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold grey-800">5 - 15 Mbps</h2>
              <h2 className="text-sm grey-450 uppercase">Download Speed</h2>
            </div>
          </div>
          <div className="flex items-center border-b border-gray-300 mx-3 py-2">
            <div className="w-20 text-center"><img alt="" src={Img__infinity_500} className="mx-auto" /></div>
            <div className="flex-1">
              <h2 className="text-lg font-normal grey-800">Unlimited Data</h2>
            </div>
          </div>
          <div className="flex items-center border-b border-gray-300 mx-3 py-2">
            <div className="w-20 text-center"><img alt="" src={Img__devices_200} className="mx-auto" /></div>
            <div className="flex-1">
              <h2 className="text-lg font-normal grey-800">1 - 2 Devices</h2>
              <h2 className="text-sm grey-450 uppercase">Browsing / Streaming</h2>
            </div>
          </div>
          <div className="hidden md:block py-6 px-6">
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Stay Connected</h4>
            </div>
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Great for Browsing and Email</h4>
            </div>
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Wireless Access Point</h4>
            </div>
            <div className="flex content-start">
              <div className="w-12 text-center">&nbsp;</div>
              <h4 className="flex-1 text-sm grey-700 pt-1">&nbsp;</h4>
            </div>
          </div>
          <div className="text-center mr-4 pt-8 md:pt-4 pb-8">
            <button
              type="button"
              className="shop-internet-btn next-page-btn text-white text-lg font-semi-bold py-2 px-5 rounded-full"
              data-next-page="internet"
            >
              Shop Basic
            </button>
          </div>
        </div>

        <div className="border border-gray-400 rounded md:w-1/2 mx-auto lg:w-1/3 lg:mx-3 mb-6 bg-white shadow-lg">
          <div className="h-10 bg-canfone-red">
            <h2 className="text-xl uppercase text-white text-center font-semibold pt-1">Most Popular</h2>
          </div>
          <h2 className="text-3xl font-semibold text-center grey-700 pt-2 lg:pt-4">Standard</h2>
          <h3 className="text-base font-normal uppercase text-center grey-500 tracking-wider pb-2 lg:pb-6">Internet</h3>
          <h2 className="text-lg font-light grey-800 text-center pb-2 lg:pb-6">From <span className="text-2xl align-top">$</span><span className="text-5xl">50</span> /month</h2>
          <div className="flex items-center border-t border-b border-gray-300 mx-3 py-2">
            <div className="w-20 text-center"><img alt="" src={Img__download_500} className="mx-auto" /></div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold grey-800">30 - 60 Mbps</h2>
              <h2 className="text-sm grey-450 uppercase">Download Speed</h2>
            </div>
          </div>
          <div className="flex items-center border-b border-gray-300 mx-3 py-2">
            <div className="w-20 text-center"><img alt="" src={Img__infinity_500} className="mx-auto" /></div>
            <div className="flex-1">
              <h2 className="text-lg font-normal grey-800">Unlimited Data</h2>
            </div>
          </div>
          <div className="flex items-center border-b border-gray-300 mx-3 py-2">
            <div className="w-20 text-center"><img alt="" src={Img__devices_200} className="mx-auto" /></div>
            <div className="flex-1">
              <h2 className="text-lg font-normal grey-800">1 - 4 Devices</h2>
              <h2 className="text-sm grey-450 uppercase">Streaming / Gaming</h2>
            </div>
          </div>
          <div className="hidden md:block py-6 px-6">
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Stay Connected</h4>
            </div>
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Faster Speeds for Streaming</h4>
            </div>
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Low Latency for Gaming</h4>
            </div>
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Wireless Access Point</h4>
            </div>
          </div>
          <div className="text-center mr-4 pt-8 md:pt-4 pb-8">
            <button
              type="button"
              className="shop-internet-btn next-page-btn text-white text-lg font-semi-bold py-2 px-5 rounded-full"
              data-next-page="internet"
            >
              Shop Standard
            </button>
          </div>
        </div>

        <div className="border border-gray-400 rounded md:w-1/2 mx-auto lg:w-1/3 lg:mx-3 lg:mt-10 mb-6 bg-white">
          <h2 className="text-3xl font-semibold text-center grey-700 pt-2 lg:pt-4">Pro</h2>
          <h3 className="text-base font-normal uppercase text-center grey-500 tracking-wider pb-2 lg:pb-6">Internet</h3>
          <h2 className="text-lg font-light grey-800 text-center pb-2 lg:pb-6">From <span className="text-2xl align-top">$</span><span className="text-5xl">65</span> /month</h2>
          <div className="flex items-center border-t border-b border-gray-300 mx-3 py-2">
            <div className="w-20 text-center"><img alt="" src={Img__download_800} className="mx-auto" /></div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold grey-800">100 Mbps - 1 Gbps</h2>
              <h2 className="text-sm grey-450 uppercase">Download Speed</h2>
            </div>
          </div>
          <div className="flex items-center border-b border-gray-300 mx-3 py-2">
            <div className="w-20 text-center"><img alt="" src={Img__infinity_500} className="mx-auto" /></div>
            <div className="flex-1">
              <h2 className="text-lg font-normal grey-800">Unlimited Data</h2>
            </div>
          </div>
          <div className="flex items-center border-b border-gray-300 mx-3 py-2">
            <div className="w-20 text-center"><img alt="" src={Img__devices_200} className="mx-auto" /></div>
            <div className="flex-1">
              <h2 className="text-lg font-normal grey-800">1 - 8 Devices</h2>
              <h2 className="text-sm grey-450 uppercase">Streaming / Gaming</h2>
            </div>
          </div>
          <div className="hidden md:block py-6 px-6">
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Stay Connected</h4>
            </div>
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Faster Speeds for Streaming</h4>
            </div>
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Low Latency for Gaming</h4>
            </div>
            <div className="flex content-start">
              <div className="w-12 text-center text-canfone-teal py-1">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <h4 className="flex-1 text-sm grey-700 pt-1">Wireless Access Point</h4>
            </div>
          </div>
          <div className="text-center mr-4 pt-8 md:pt-4 pb-8">
            <button
              type="button"
              className="shop-internet-btn next-page-btn text-white text-lg font-semi-bold py-2 px-5 rounded-full"
              data-next-page="internet"
            >
              Shop Pro
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white">
      <LandingSection type={true} section_data={section[0]}/>
      <div className="text-center mr-4 pt-4 pb-10">
        <button
          type="button"
          className="shop-tv-btn next-page-btn text-white text-lg font-semi-bold py-2 px-5 rounded-full"
          data-next-page="tv"
        >
          Shop TV
        </button>
      </div>
      <div className="hidden md:block pb-16">
        <table className="border border-gray-500 mx-auto">
          <thead>
            <tr>
              <th> </th>
              <th className="border border-gray-500 w-48 py-3 px-2">
                <h3 className="text-lg font-semibold grey-800">The Basics</h3>
                <p className="text-sm grey-600 font-light">A great collection of essential channels</p>
              </th>
              <th className="border border-gray-500 w-48 py-3 px-2">
                <h3 className="text-lg font-semibold grey-800">Add-on Packages</h3>
                <p className="text-sm grey-600 font-light">Customize your TV experience</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 py-3 px-3">Monthly Fee</td>
              <td className="border border-gray-500 py-3 text-center"><span className="text-3xl grey-700 font-semibold">$35</span></td>
              <td className="border border-gray-500 py-3 text-center grey-700">$2.99 per add-on</td>
            </tr>
            <tr>
              <td colSpan="3" className="pt-4 pb-1 px-3 uppercase">Features</td>
            </tr>
            <tr>
              <td className="border border-gray-500 w-48 py-2">
                <h3 className="font-semibold px-3">Local News</h3>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 w-48 py-2">
                <h3 className="font-semibold px-3">Major Networks</h3>
                <p className="text-sm grey-600 font-light px-3">CBC, CTV, Global</p>
                <p className="text-sm grey-600 font-light px-3">ABC, CBS, FOX, NBC</p>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 w-48 py-2">
                <h3 className="font-semibold px-3">Premium Content</h3>
                <p className="text-sm grey-600 font-light px-3">HBO, Crave, AMC and more</p>
              </td>
              <td className="border border-gray-500 text-center py-2"></td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 w-48 py-2">
                <h3 className="font-semibold px-3">Live Sports</h3>
                <p className="text-sm grey-600 font-light px-3">TSN, Sportsnet, Fight Network and more</p>
              </td>
              <td className="border border-gray-500 text-center py-2"></td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-white">
      <h1 className="md:hidden text-3xl font-semibold text-steel-blue-600 text-center leading-tight">Phone Packages</h1>
      <LandingSection type={false} section_data={section[1]} />
      <div className="text-center mr-4 pt-4 pb-8">
        <button
          type="button"
          className="shop-phone-btn next-page-btn text-white text-lg font-semi-bold py-2 px-5 rounded-full"
          data-next-page="phone"
        >
          Shop Phone
        </button>
      </div>

      <div className="hidden md:block mx-6 pb-16">
        <table className="border border-gray-500 mx-auto">
          <thead>
            <tr>
              <th> </th>
              <th className="border border-gray-500 w-48 py-3 px-2 align-top">
                <h3 className="text-lg font-semibold grey-800">Canada</h3>
                <p className="text-sm grey-600 font-light">Unlimited calls within Canada.</p>
              </th>
              <th className="border border-gray-500 w-48 py-3 px-2 align-top">
                <h3 className="text-lg font-semibold grey-800">Canada & USA</h3>
                <p className="text-sm grey-600 font-light">Unlimited calling within Canada and the USA.</p>
              </th>
              <th className="border border-gray-500 w-48 py-3 px-2 align-top">
                <h3 className="text-lg font-semibold grey-800">World</h3>
                <p className="text-sm grey-600 font-light">Call anywhere, anytime. Unlimited worldwide calls.</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 py-3 px-3">Monthly Fee</td>
              <td className="border border-gray-500 py-3 text-center"><span className="text-2xl font-semibold">$10</span></td>
              <td className="border border-gray-500 py-3 text-center"><span className="text-2xl font-semibold">$20</span></td>
              <td className="border border-gray-500 py-3 text-center"><span className="text-2xl font-semibold">$30</span></td>
            </tr>
            <tr>
              <td colSpan="3" className="pt-4 pb-1 px-3 uppercase">Features</td>
            </tr>
            <tr>
              <td className="border border-gray-500 w-48 py-2">
                <h3 className="font-semibold px-3">Unlimited Calls</h3>
                <p className="text-sm grey-600 font-light px-3">Talk as often as you want for as long as you want.</p>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 w-48 py-2">
                <h3 className="font-semibold px-3">Bring Your Number</h3>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 w-48 py-2">
                <h3 className="font-semibold px-3">Caller ID</h3>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 w-48 py-2">
                <h3 className="font-semibold px-3">ATA Included</h3>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
              <td className="border border-gray-500 text-center py-2">
                <div className="px-3 py-2 text-canfone-teal">
                  <FontAwesomeIcon icon={faCheck}/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
}