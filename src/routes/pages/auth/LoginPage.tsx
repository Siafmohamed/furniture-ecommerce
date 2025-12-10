/**
 * LoginPage Component
 * 
 * Authentication page for user login.
 * Redirects authenticated users away from this page.
 */

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";
// import { useAuthStore } from "../../utils/authStore"; // Uncomment when auth store is ready

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Get the return URL from location state (set by AuthGuard)
  const from = (location.state as { from?: string })?.from || "/dashboard";

  // const { login, isLoading } = useAuthStore(); // Uncomment when auth store is ready

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement actual login logic
    // Example with auth store:
    // try {
    //   await login(email, password);
    //   navigate(from, { replace: true });
    // } catch (error) {
    //   // Handle error
    // }
    
    // Mock: For now, just navigate (remove this when implementing real auth)
    console.log("Login attempt:", { email, password });
    navigate(from, { replace: true });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <Heading level={1} size="2xl" weight="bold" className="mb-6 text-center">
        Login
      </Heading>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full"
          />
        </div>
        
        <Button variant="primary" type="submit" className="w-full">
          {/* {isLoading ? "Logging in..." : "Login"} */}
          Login
        </Button>
      </form>
      
      <div className="mt-6 text-center space-y-2">
        <Link to="/auth/forgot-password" className="text-sm text-amber-600 hover:text-amber-700">
          Forgot password?
        </Link>
        <Text size="sm" className="text-gray-600">
          Don't have an account?{" "}
          <Link to="/auth/combined" className="text-amber-600 hover:text-amber-700 font-medium">
            Sign up
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

export default LoginPage;


