/**
 * DashboardPage Component
 * 
 * Main dashboard page for authenticated users.
 * Protected route - requires authentication.
 */

import React from "react";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <Heading level={1} size="2xl" weight="bold" className="mb-4">
        Dashboard
      </Heading>
      <Text className="mb-4">
        Welcome to your dashboard! This is a protected route that requires authentication.
      </Text>
      <Text className="text-gray-600">
        You can manage your orders, profile, and wishlist from here.
      </Text>
    </div>
  );
};

export default DashboardPage;





















