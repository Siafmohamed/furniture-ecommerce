/**
 * SignInForm Component (Organism)
 * 
 * Complete sign-in form with Zod validation.
 * Handles form state, validation errors, and submission with loading state.
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../molecules/FormField/FormField";
import PasswordInput from "../../molecules/PasswordInput/PasswordInput";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Button from "../../atoms/Button/Button";
import Link from "../../atoms/Link/Link";
import { signInSchema, type SignInFormData } from "../../../features/auth/schemas/authSchemas";

type SignInFormProps = {
  /** Submit handler */
  onSubmit: (data: SignInFormData) => Promise<void>;
  /** Whether form is in loading state */
  isLoading?: boolean;
  /** Additional CSS classes */
  className?: string;
};

const SignInForm: React.FC<SignInFormProps> = ({
  onSubmit,
  isLoading = false,
  className,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleFormSubmit = async (data: SignInFormData) => {
    await onSubmit({ ...data, rememberMe });
  };

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Log In</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <FormField
          label="Username or email address"
          id="usernameOrEmail"
          {...register("usernameOrEmail")}
          error={errors.usernameOrEmail?.message}
          autoComplete="username"
        />

        <PasswordInput
          label="Password"
          id="password"
          {...register("password")}
          error={errors.password?.message}
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between">
          <Checkbox
            id="rememberMe"
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            {...register("rememberMe")}
          />

          <Link
            href="/auth/forgot-password"
            className="text-sm text-amber-600 hover:text-amber-700"
          >
            Lost Your Password?
          </Link>
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={isLoading}
          disabled={isLoading}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;

