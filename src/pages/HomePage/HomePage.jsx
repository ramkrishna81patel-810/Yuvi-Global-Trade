import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import ProductSection from '../productSection/ProductSection'
import AboutSection from '../AboutSection/AboutSection'
import WhyChooseUs from '../WhyChoose/WhyChooseUs'
import CustomizationSection from '../customization/CustomizationSection'
import ManufacturingProcess from '../ManufactureSection/ManufacturingProcess'
import ContactSection from '../ContactSection/ContactSection'

const HomePage = () => {
  return (
    <div><HeroSection />
      <ProductSection />
      <AboutSection />
      <WhyChooseUs />
      <CustomizationSection />
      <ManufacturingProcess />
      <ContactSection />
    </div>
  )
}

export default HomePage