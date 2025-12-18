import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Heading from "../../components/atoms/Heading/Heading";
import Text from "../../components/atoms/Text/Text";
import Button from "../../components/atoms/Button/Button";
import Icon from "../../components/atoms/Icon/Icon";

const CartPage: React.FC = () => {
  const { items, totalItems, totalPrice, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/shop");
  };

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    console.log("Proceed to checkout");
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Heading level={1} size="2xl" weight="bold" className="mb-4">
            Your Cart is Empty
          </Heading>
          <Text className="mb-6 text-gray-600">
            Looks like you haven't added any items to your cart yet.
          </Text>
          <Button variant="primary" onClick={handleContinueShopping}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Heading level={1} size="2xl" weight="bold" className="mb-8">
        Shopping Cart
      </Heading>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <Text weight="medium" className="text-gray-900">
                          {item.name}
                        </Text>
                        {item.size && (
                          <Text size="sm" className="text-gray-500 mt-1">
                            Size: {item.size}
                          </Text>
                        )}
                        {item.color && (
                          <Text size="sm" className="text-gray-500 mt-1">
                            Color: {item.color}
                          </Text>
                        )}
                      </div>
                      <Text weight="bold" className="text-gray-900">
                        Rs. {item.price.toLocaleString()}
                      </Text>
                    </div>
                    
                    {/* Quantity and Actions */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md text-gray-600 hover:bg-gray-50"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-12 h-8 border-y border-gray-300 text-center text-gray-900"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md text-gray-600 hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 flex items-center"
                      >
                        <Icon name="Trash2" size="small" className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <Heading level={2} size="lg" weight="bold" className="mb-4">
              Order Summary
            </Heading>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <Text className="text-gray-600">
                  Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </Text>
                <Text weight="medium">
                  Rs. {totalPrice.toLocaleString()}
                </Text>
              </div>
              
              <div className="flex justify-between">
                <Text className="text-gray-600">Shipping</Text>
                <Text weight="medium">Free</Text>
              </div>
              
              <div className="flex justify-between">
                <Text className="text-gray-600">Tax</Text>
                <Text weight="medium">Calculated at checkout</Text>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <Text weight="bold" size="lg">
                  Total
                </Text>
                <Text weight="bold" size="lg" className="text-amber-600">
                  Rs. {totalPrice.toLocaleString()}
                </Text>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              fullWidth 
              onClick={handleCheckout}
              className="mb-4"
            >
              Proceed to Checkout
            </Button>
            
            <Button 
              variant="outline" 
              fullWidth 
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;