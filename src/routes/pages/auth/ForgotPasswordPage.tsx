/**
 * ForgotPasswordPage Component
 * 
 * Password reset request page.
 */

import React from "react";
import { Link } from "react-router-dom";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";

const ForgotPasswordPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset logic
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <Heading level={1} size="2xl" weight="bold" className="mb-6 text-center">
        Forgot Password
      </Heading>
      
      <Text className="mb-6 text-gray-600 text-center">
        Enter your email address and we'll send you a link to reset your password.
      </Text>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full"
          />
        </div>
        
        <Button variant="primary" type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <Link to="/auth/login" className="text-sm text-amber-600 hover:text-amber-700">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;





















