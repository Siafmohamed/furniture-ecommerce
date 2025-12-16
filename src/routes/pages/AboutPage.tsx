/**
 * AboutPage Component
 * 
 * Simple public page example.
 */

import React from "react";
import Text from "../../components/atoms/Text/Text";
import Heading from "../../components/atoms/Heading/Heading";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Heading level={1} size="3xl" weight="bold" className="mb-6">
        About Us
      </Heading>
      <Text size="lg" className="mb-4">
        Welcome to our furniture e-commerce platform.
      </Text>
      <Text className="mb-4">
        This is a public page that doesn't require authentication.
      </Text>
    </div>
  );
};

export default AboutPage;












