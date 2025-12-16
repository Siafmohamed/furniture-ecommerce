/**
 * AuthLayout Component
 * 
 * Layout wrapper for authentication pages (login, register, etc.).
 * Typically has a minimal design without header/footer.
 */

import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;












