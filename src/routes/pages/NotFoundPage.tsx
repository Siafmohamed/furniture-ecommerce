/**
 * NotFoundPage Component
 * 
 * 404 error page for routes that don't exist.
 */

import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/templates/MainLayout/MainLayout";
import Text from "../../components/atoms/Text/Text";
import Heading from "../../components/atoms/Heading/Heading";
import Button from "../../components/atoms/Button/Button";

const NotFoundPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Heading level={1} size="4xl" weight="bold" className="mb-4">
            404
          </Heading>
          <Text size="xl" className="mb-4">
            Page Not Found
          </Text>
          <Text className="mb-8 text-gray-600">
            The page you're looking for doesn't exist.
          </Text>
          <Link to="/">
            <Button variant="primary">Go Home</Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;












