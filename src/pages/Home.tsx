'use client'
import React, { useEffect, useMemo, useState } from "react"
import HeroSection from "../components/LandingPage/HeroSection"
import OfferingsSection from "../components/LandingPage/OfferingsSection"
import TestimonialsSection from "../components/LandingPage/TestimonialsSection"
import UIComponentsMarketingSection from "../components/LandingPage/UIComponentsMarketingSection"
import TemplatesGridSection from "../components/LandingPage/TemplatesGridSection"
import AngledPanelBackground from "../components/Common/AngledPanelBackground"
import { ArrowUp } from "lucide-react"



const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(100, Math.round((y / h) * 100)) : 0;
      setScrollPct(pct);
      setShowScroll(y > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progressStyle = useMemo(() => ({
    background: `conic-gradient(#6d28d9 ${scrollPct * 3.6}deg, rgba(99,102,241,.25) ${scrollPct * 3.6}deg)`,
  }), [scrollPct]);

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
        {showScroll && (
        <button onClick={scrollToTop} aria-label="Scroll to top" className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-900 shadow-xl ring-4 ring-white/50 transition hover:scale-110 dark:bg-slate-800 dark:text-white dark:ring-slate-900/60" style={progressStyle}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white"><ArrowUp size={18} /></span>
        </button>
      )}


    </React.Fragment>
  )
}

export default Home