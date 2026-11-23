import React, { useEffect } from 'react'
import HeroSection from '../HeroSection/HeroSection'
import ProductSection from '../productSection/ProductSection'
import AboutSection from '../AboutSection/AboutSection'
import WhyChooseUs from '../WhyChoose/WhyChooseUs'
import CustomizationSection from '../customization/CustomizationSection'
import ManufacturingProcess from '../ManufactureSection/ManufacturingProcess'
import ContactSection from '../ContactSection/ContactSection'
import { useLocation } from 'react-router-dom'
import QualitySection from '../QualitySection/QualitySection'
import IndustriesSection from '../IndustriesSection/IndustriesSection'
import SustainabilitySection from '../SustainabilitySection/SustainabilitySection'
import FAQSection from '../FAQ/FAQSection'

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace("/", "") || "home";

    const timer = setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <div>
      {/* <HeroSection />
      <ProductSection />
      <AboutSection />
      <WhyChooseUs />
      <CustomizationSection />
      <ManufacturingProcess />
      <ContactSection /> */}

      <div id="home">
        <HeroSection />
      </div>

      <div id="products">
        <ProductSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>
      <div id="quality">
        <QualitySection />
      </div>
      <div id="manufacturing">
        <ManufacturingProcess />
      </div>
      <div id="customization">
        <CustomizationSection />
      </div>
      <div id="industries">
        <IndustriesSection />
      </div>

      <div id="sustainability">
        <SustainabilitySection />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>

    </div>
  )
}

export default HomePage