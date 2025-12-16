/**
 * AdminDashboardPage Component
 * 
 * Admin dashboard - requires admin role.
 * Protected route with role-based access control.
 */

import React from "react";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";

const AdminDashboardPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <Heading level={1} size="2xl" weight="bold" className="mb-4">
        Admin Dashboard
      </Heading>
      <Text className="mb-4">
        Welcome to the admin panel! This route requires admin role.
      </Text>
      <Text className="text-gray-600">
        You can manage products, orders, and users from here.
      </Text>
    </div>
  );
};

export default AdminDashboardPage;












