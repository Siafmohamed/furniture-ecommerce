/**
 * RegisterPage Component
 * 
 * User registration page.
 */

import React from "react";
import { Link } from "react-router-dom";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";

const RegisterPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual registration logic
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <Heading level={1} size="2xl" weight="bold" className="mb-6 text-center">
        Create Account
      </Heading>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full"
          />
        </div>
        
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
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
            required
            className="w-full"
          />
        </div>
        
        <Button variant="primary" type="submit" className="w-full">
          Register
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <Text size="sm" className="text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/combined" className="text-amber-600 hover:text-amber-700 font-medium">
            Login
          </Link>
        </Text>
        <Text size="sm" className="text-gray-600 mt-4">
          Or{" "}
          <Link to="/auth/combined" className="text-amber-600 hover:text-amber-700 font-medium">
            view both forms on one page
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default RegisterPage;












