/**
 * CombinedAuthPage Component
 * 
 * Authentication page with both Sign In and Register forms side by side.
 * Forms are responsive and stack vertically on smaller screens.
 */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Text from "../../../components/atoms/Text/Text";
import Heading from "../../../components/atoms/Heading/Heading";
import Button from "../../../components/atoms/Button/Button";
import Input from "../../../components/atoms/Input/Input";

const CombinedAuthPage: React.FC = () => {
  const navigate = useNavigate();
  
  // State for login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  
  // State for register form
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", { email: loginEmail, password: loginPassword });
      setIsLoginLoading(false);
      // Navigate to dashboard after successful login
      navigate("/dashboard");
    }, 1000);
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegisterLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Register attempt:", { name: registerName, email: registerEmail, password: registerPassword });
      setIsRegisterLoading(false);
      // Navigate to dashboard after successful registration
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <Heading level={1} size="3xl" weight="bold" className="mb-2 text-center text-gray-800">
        Welcome to Funiro
      </Heading>
      <Text size="lg" className="text-gray-600 text-center mb-8">
        Sign in to your account or create a new one
      </Text>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sign In Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <Heading level={2} size="2xl" weight="bold" className="mb-6 text-gray-800">
            Sign In
          </Heading>
          
          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="w-full"
                aria-describedby="login-email-error"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link to="/auth/forgot-password" className="text-sm text-amber-600 hover:text-amber-700">
                  Forgot?
                </Link>
              </div>
              <Input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <Button 
              variant="primary" 
              type="submit" 
              className="w-full"
              isLoading={isLoginLoading}
            >
              Sign In
            </Button>
          </form>
          
          <div className="mt-6">
            <Text size="sm" className="text-gray-600">
              Don't have an account?{" "}
              <button 
                onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-amber-600 hover:text-amber-700 font-medium underline"
              >
                Register here
              </button>
            </Text>
          </div>
        </div>
        
        {/* Register Form */}
        <div id="register-form" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <Heading level={2} size="2xl" weight="bold" className="mb-6 text-gray-800">
            Create Account
          </Heading>
          
          <form onSubmit={handleRegisterSubmit} className="space-y-5">
            <div>
              <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <Input
                id="register-name"
                type="text"
                placeholder="Enter your full name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                id="register-email"
                type="email"
                placeholder="Enter your email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                id="register-password"
                type="password"
                placeholder="Create a password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <Button 
              variant="primary" 
              type="submit" 
              className="w-full"
              isLoading={isRegisterLoading}
            >
              Create Account
            </Button>
          </form>
          
          <div className="mt-6">
            <Text size="sm" className="text-gray-600">
              Already have an account?{" "}
              <button 
                onClick={() => document.getElementById('login-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-amber-600 hover:text-amber-700 font-medium underline"
              >
                Sign in here
              </button>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedAuthPage;