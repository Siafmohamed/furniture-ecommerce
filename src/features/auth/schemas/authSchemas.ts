/**
 * Authentication Validation Schemas
 * 
 * Zod schemas for validating sign-in and sign-up forms.
 * Provides type-safe validation with clear error messages.
 */

import { z } from "zod";

/**
 * Sign In Form Schema
 * Validates username/email and password for login
 */
export const signInSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(1, "Username or email is required")
    .refine(
      (value) => {
        // Check if it's an email or username
        const isEmail = z.string().email().safeParse(value).success;
        return isEmail || value.length >= 3;
      },
      {
        message: "Please enter a valid email or username",
      }
    ),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional().default(false),
});

export type SignInFormData = z.infer<typeof signInSchema>;

/**
 * Sign Up Form Schema
 * Validates email for registration
 */
export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

