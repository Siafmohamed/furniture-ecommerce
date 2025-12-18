/**
 * OrdersPage Component
 * 
 * User orders page - shows order history.
 * Protected route - requires authentication.
 */

import React from "react";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";

const OrdersPage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <Heading level={1} size="2xl" weight="bold" className="mb-4">
        My Orders
      </Heading>
      <Text className="text-gray-600">
        Your order history will appear here.
      </Text>
    </div>
  );
};

export default OrdersPage;





















