/**
 * AdminOrdersPage Component
 * 
 * Admin order management page.
 * Requires admin role.
 */

import React from "react";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";

const AdminOrdersPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <Heading level={1} size="2xl" weight="bold" className="mb-4">
        Manage Orders
      </Heading>
      <Text className="text-gray-600">
        Order management interface will appear here.
      </Text>
    </div>
  );
};

export default AdminOrdersPage;





















