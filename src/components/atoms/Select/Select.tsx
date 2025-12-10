import React from "react";
import clsx from "clsx";

type Option = { label: string; value: string };

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
};

const Select: React.FC<SelectProps> = ({ value, onChange, options, className }) => {
  return (
    <div className={clsx("relative", className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-full border border-gray-200 bg-white px-4 py-2 pr-9 text-sm font-medium text-gray-700 transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
        ▾
      </span>
    </div>
  );
};

export default Select;

