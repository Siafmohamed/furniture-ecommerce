/**
 * AccessDeniedPage Component
 * 
 * Shown when user doesn't have required permissions.
 */

import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/templates/MainLayout/MainLayout";
import Text from "../../components/atoms/Text/Text";
import Heading from "../../components/atoms/Heading/Heading";
import Button from "../../components/atoms/Button/Button";

const AccessDeniedPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Heading level={1} size="3xl" weight="bold" className="mb-4">
            Access Denied
          </Heading>
          <Text size="lg" className="mb-4">
            You don't have permission to access this page.
          </Text>
          <Text className="mb-8 text-gray-600">
            Please contact an administrator if you believe this is an error.
          </Text>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button variant="primary">Go Home</Button>
            </Link>
            <Link to="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AccessDeniedPage;












