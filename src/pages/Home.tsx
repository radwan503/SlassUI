import React from "react"
import HeroSection from "../components/LandingPage/HeroSection"
import OfferingsSection from "../components/LandingPage/OfferingsSection"
import TestimonialsSection from "../components/LandingPage/TestimonialsSection"
import UIComponentsMarketingSection from "../components/LandingPage/UIComponentsMarketingSection"
import TemplatesGridSection from "../components/LandingPage/TemplatesGridSection"
import AngledPanelBackground from "../components/Common/AngledPanelBackground"


const Home = () => {
  return (
    <React.Fragment>
        <AngledPanelBackground/>
        <HeroSection />
        <OfferingsSection />
        {/* <IllustrativeImageSection /> */}
        <UIComponentsMarketingSection/>
        <TemplatesGridSection/>
        <TestimonialsSection />
        {/* <StatsCardSection/> */}



    </React.Fragment>
  )
}

export default Home