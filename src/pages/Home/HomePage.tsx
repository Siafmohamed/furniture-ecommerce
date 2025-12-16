import React from "react";

// Import feature components
import HeroBanner from "../../features/home/components/HeroBanner";
import TwoColumnShowcase from "../../features/home/components/TwoColumnShowcase";
import FeaturedProducts from "../../features/home/components/FeaturedProducts";
import MidPageBanner from "../../features/home/components/MidPageBanner";
import BlogPreview from "../../features/home/components/BlogPreview";
import InstagramSection from "../../features/home/components/InstagramSection";

const HomePage = () => {
  return (
    <>
      {/* Step 4: Feature Components */}
      <HeroBanner />
      <TwoColumnShowcase />
      <FeaturedProducts />
      <MidPageBanner />
      <BlogPreview />
      <InstagramSection />
    </>
  );
};

export default HomePage;