import React from "react";
import HeroBanner from "../components/layout/HeroBanner";
import CategorySection from "../components/layout/CategorySection";
import FlagshipPhonesSection from "../components/layout/FlagshipPhonesSection";
import LaptopSection from "../components/layout/LaptopSection";

function HomePage() {
  return (
    <div>
      <HeroBanner />
      <CategorySection />
      <FlagshipPhonesSection />
      <LaptopSection />
    </div>
  );
}

export default HomePage;
