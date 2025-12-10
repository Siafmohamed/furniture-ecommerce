/**
 * FormField Component (Molecule)
 * 
 * Combines Label and Input atoms with error message display.
 * Handles validation error display in real-time.
 */

import React from "react";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import Text from "../../atoms/Text/Text";

type FormFieldProps = {
  /** Field label */
  label: string;
  /** Input type */
  type?: "text" | "email" | "password" | "tel" | "url";
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

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  id,
  name,
  placeholder,
  required = false,
  error,
  autoComplete,
  className,
}) => {
  const fieldId = id || name;

  return (
    <div className={className}>
      <Label htmlFor={fieldId} required={required} hasError={!!error}>
        {label}
      </Label>
      <Input
        id={fieldId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        hasError={!!error}
        autoComplete={autoComplete}
      />
      {error && (
        <Text size="sm" className="mt-1 text-red-600">
          {error}
        </Text>
      )}
    </div>
  );
};

export default FormField;








