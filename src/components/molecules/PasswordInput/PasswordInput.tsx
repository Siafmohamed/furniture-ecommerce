/**
 * PasswordInput Component (Molecule)
 * 
 * Password input field with show/hide toggle functionality.
 * Combines Input atom with visibility toggle button.
 */

import React, { useState } from "react";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";

type PasswordInputProps = {
  /** Field label */
  label: string;
  /** Input value */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** HTML id attribute */
  id?: string;
  /** HTML name attribute */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Error message to display */
  error?: string;
  /** Auto-complete attribute */
  autoComplete?: string;
  /** Additional CSS classes */
  className?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
  id,
  name,
  placeholder,
  required = false,
  error,
  autoComplete = "current-password",
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const fieldId = id || name;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={className}>
      <Label htmlFor={fieldId} required={required} hasError={!!error}>
        {label}
      </Label>
      <div className="relative">
        <Input
          id={fieldId}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          hasError={!!error}
          autoComplete={autoComplete}
          className="pr-10"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <Icon
            name={showPassword ? "EyeOff" : "Eye"}
            size="small"
          />
        </button>
      </div>
      {error && (
        <Text size="sm" className="mt-1 text-red-600">
          {error}
        </Text>
      )}
    </div>
  );
};

export default PasswordInput;











