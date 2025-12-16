/**
 * ProfilePage Component
 * 
 * User profile management page.
 * Protected route - requires authentication.
 */

import React from "react";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <Heading level={1} size="2xl" weight="bold" className="mb-4">
        Profile Settings
      </Heading>
      <Text className="text-gray-600">
        Manage your profile information here.
      </Text>
    </div>
  );
};

export default ProfilePage;












