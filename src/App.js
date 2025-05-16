import React from "react";
import "./styles.css";

import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import LoanTypesSection from "./components/LoanTypeSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import StepsSection from "./components/StepsSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialSection";
import LoanFinderSection from "./components/LoanFinderSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import LoanCalculator from "./components/Calculator";

function App() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <LoanTypesSection />
      <WhyChooseUsSection />
      <StepsSection />
      <LoanCalculator />
      <StatsSection />
      <TestimonialsSection />
      <LoanFinderSection />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
