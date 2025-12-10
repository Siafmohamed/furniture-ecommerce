/**
 * ContactPage Component
 * 
 * Simple public contact page.
 */

import React from "react";
import MainLayout from "../../components/templates/MainLayout/MainLayout";
import Text from "../../components/atoms/Text/Text";
import Heading from "../../components/atoms/Heading/Heading";

const ContactPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <Heading level={1} size="3xl" weight="bold" className="mb-6">
          Contact Us
        </Heading>
        <Text size="lg" className="mb-4">
          Get in touch with us.
        </Text>
        <Text>
          This is a public page accessible to all users.
        </Text>
      </div>
    </MainLayout>
  );
};

export default ContactPage;









