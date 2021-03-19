import React from "react"
import FAChat from "../components/fa-chat"
import CanMap from "../components/canfone-map"
import PageHeader from "../components/page-header"
import LandingSection from "components/landing-section"

export default function Internet({intro, section}) {
  return <>
    <div className="header-phone">
      <PageHeader
        title2={intro.intro_title[0].text}
        title3={intro.intro_subtitle[0].text}
        serviceType="Monthly plans starting from"
        price={"$" + intro.start_price}
      />
    </div>

    <FAChat />
    <CanMap />

    <div className="px-4 md:px-8 pt-6 md:pt-16 pb-10 md:pb-24">
      <LandingSection type={true} section_data={section[0]} />
    </div>
  </>
}

