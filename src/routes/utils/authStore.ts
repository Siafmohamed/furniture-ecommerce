/**
 * Auth Store Example
 * 
 * Example authentication store using Zustand.
 * Replace this with your actual authentication implementation.
 * 
 * This is a mock implementation - integrate with your real auth system.
 */

import { create } from "zustand";
import { UserRole } from "../types";

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
}

/**
 * Mock authentication store
 * Replace with actual API calls and state management
 */
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    
    // TODO: Replace with actual API call
    // const response = await authApi.login(email, password);
    
    // Mock login - simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Mock user data
    const mockUser: User = {
      id: "1",
      email,
      name: "John Doe",
      role: "user", // Change to "admin" to test admin routes
    };

    set({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
  },

  register: async (email: string, password: string, name: string) => {
    set({ isLoading: true });
    
    // TODO: Replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: "1",
      email,
      name,
      role: "user",
    };

    set({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });
  },

  logout: () => {
    // TODO: Call logout API
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));








