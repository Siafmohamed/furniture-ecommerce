import React from "react";
import MainLayout from "../../components/templates/MainLayout/MainLayout";

// Import feature components
import HeroBanner from "../../features/home/components/HeroBanner";
import TwoColumnShowcase from "../../features/home/components/TwoColumnShowcase";
import FeaturedProducts from "../../features/home/components/FeaturedProducts";
import MidPageBanner from "../../features/home/components/MidPageBanner";
import BlogPreview from "../../features/home/components/BlogPreview";
import InstagramSection from "../../features/home/components/InstagramSection";

const HomePage = () => {
  return (
    <MainLayout>
      {/* Step 4: Feature Components */}
      <HeroBanner />
      <TwoColumnShowcase />
      <FeaturedProducts />
      <MidPageBanner />
      <BlogPreview />
      <InstagramSection />
    </MainLayout>
  );
};

export default HomePage;