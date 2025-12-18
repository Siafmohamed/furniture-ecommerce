/**
 * AdminLayout Component
 * 
 * Layout wrapper for admin-only pages.
 * Includes admin-specific navigation and tools.
 */

import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const AdminLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Admin Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Admin Panel</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/admin"
                    className={`block px-4 py-2 rounded-lg transition ${
                      location.pathname === "/admin"
                        ? "bg-amber-50 text-amber-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/products"
                    className={`block px-4 py-2 rounded-lg transition ${
                      location.pathname.startsWith("/admin/products")
                        ? "bg-amber-50 text-amber-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orders"
                    className={`block px-4 py-2 rounded-lg transition ${
                      location.pathname.startsWith("/admin/orders")
                        ? "bg-amber-50 text-amber-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/users"
                    className={`block px-4 py-2 rounded-lg transition ${
                      location.pathname.startsWith("/admin/users")
                        ? "bg-amber-50 text-amber-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Users
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

export default AdminLayout;





















