import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import Text from "../../components/atoms/Text/Text";
import Button from "../../components/atoms/Button/Button";

const ProductDetailErrorPage: React.FC = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleRetry = () => {
    // Simple retry: reload the current page
    // Using location.reload keeps the logic generic without relying on route params.
    window.location.reload();
  };

  const handleBackToShop = () => {
    navigate("/shop");
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-xl p-8 text-center">
        <Text size="2xl" weight="bold" className="mb-3">
          Oops! Something went wrong 😅
        </Text>
        <Text className="mb-6 text-gray-600">
          We couldn&apos;t load this product right now. Please try again in a
          moment. If the problem continues, you may want to return to the
          shop and pick another item.
        </Text>

        {/* Optionally log the raw error for development without exposing it in the UI */}
        {process.env.NODE_ENV === "development" && error && (
          <pre className="mt-4 mb-6 text-left text-xs text-red-500 bg-red-50 p-3 rounded-lg overflow-x-auto">
            {(error as Error).message || JSON.stringify(error, null, 2)}
          </pre>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button variant="primary" onClick={handleRetry}>
            Retry
          </Button>
          <Button variant="outline" onClick={handleBackToShop}>
            Back to Shop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailErrorPage;


