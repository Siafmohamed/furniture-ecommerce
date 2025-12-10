import React from "react";
import Input from "../../atoms/Input/Input";
import Icon from "../../atoms/Icon/Icon";

type SearchInputProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, placeholder, onChange }) => {
  return (
    <div className="relative w-full">
      <Input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-700 shadow-sm focus:border-amber-500"
      />
      <Icon
        name="Search"
        size="medium"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default SearchInput;

