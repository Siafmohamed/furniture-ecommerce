/**
 * ProductTabs Component (Molecule)
 * 
 * Tabbed interface for product description, additional info, and reviews.
 * Combines tab navigation with content display.
 */

import React, { useState } from "react";
import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import clsx from "clsx";

type Tab = "description" | "additional" | "reviews";

type ProductTabsProps = {
  /** Product description text */
  description: string;
  /** Additional information (e.g., dimensions, materials) */
  additionalInfo?: Record<string, string>;
  /** Reviews data */
  reviews?: Array<{
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }>;
  /** Additional CSS classes */
  className?: string;
};

const ProductTabs: React.FC<ProductTabsProps> = ({
  description,
  additionalInfo,
  reviews = [],
  className,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>("description");

  const tabs = [
    { id: "description" as Tab, label: "Description" },
    { id: "additional" as Tab, label: "Additional Information" },
    { id: "reviews" as Tab, label: `Reviews [${reviews.length || 0}]` },
  ];

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "pb-4 px-2 text-sm font-medium transition-colors border-b-2",
                activeTab === tab.id
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">
        {activeTab === "description" && (
          <div className="space-y-4">
            <Text className="text-gray-700 leading-relaxed">{description}</Text>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="space-y-4">
            {additionalInfo ? (
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(additionalInfo).map(([key, value]) => (
                    <tr key={key}>
                      <td className="py-3 px-4 font-medium text-gray-900 w-1/3">
                        {key}
                      </td>
                      <td className="py-3 px-4 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Text className="text-gray-600">No additional information available.</Text>
            )}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Text weight="bold" className="text-gray-900">
                        {review.author}
                      </Text>
                      <Text size="sm" className="text-gray-500">
                        {review.date}
                      </Text>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < review.rating ? "text-amber-400" : "text-gray-300"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <Text className="text-gray-700">{review.comment}</Text>
                </div>
              ))
            ) : (
              <Text className="text-gray-600">No reviews yet. Be the first to review!</Text>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;












