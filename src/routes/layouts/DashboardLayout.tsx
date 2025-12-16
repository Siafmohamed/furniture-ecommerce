/**
 * DashboardLayout Component
 * 
 * Layout wrapper for authenticated user dashboard pages.
 * Includes sidebar navigation and user-specific header.
 */

import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
const DashboardLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden md:block w-64 shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard"
                    className={`block px-4 py-2 rounded-lg transition ${
                      location.pathname === "/dashboard"
                        ? "bg-amber-50 text-amber-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/orders"
                    className={`block px-4 py-2 rounded-lg transition ${
                      location.pathname === "/dashboard/orders"
                        ? "bg-amber-50 text-amber-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/profile"
                    className={`block px-4 py-2 rounded-lg transition ${
                      location.pathname === "/dashboard/profile"
                        ? "bg-amber-50 text-amber-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/wishlist"
                    className={`block px-4 py-2 rounded-lg transition ${
                      location.pathname === "/dashboard/wishlist"
                        ? "bg-amber-50 text-amber-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;












