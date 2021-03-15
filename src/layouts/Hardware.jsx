import React from "react"
import CanMap from "../components/canfone-map"
import FAChat from "../components/fa-chat"
import PageHeader from "../components/page-header"


export default function Hardware() {
  return <>
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