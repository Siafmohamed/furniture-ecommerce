/**
 * PublicLayout Component
 * 
 * Layout wrapper for public routes (home, shop, about, etc.).
 * Includes header and footer but no authentication requirements.
 */

import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "../../components/templates/MainLayout/MainLayout";

const PublicLayout: React.FC = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PublicLayout;





















