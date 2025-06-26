"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
interface Props {
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  name: string;
  error?: any;
  register: UseFormRegister<any>;
}
const CustomInput = ({
  label,
  type = "text",
  placeholder,
  className,
  name,
  error,
  register,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={label} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div
        className={`${
          error ? "border-red-500 " : "border-gray-300 "
        } flex items-center gap-2 border rounded-md p-2 `}
      >
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={label}
          {...register(name)}
          className="border-none outline-none w-full text-sm  placeholder-gray-500 focus:ring-0"
          placeholder={placeholder}
        />
        {type === "password" && (
          <div
            className="text-xs text-gray-500 mt-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={14} /> : <EyeOff size={14} />}
          </div>
        )}
      </div>
      {error && (
        <span className="text-red-500 text-xs mt-1">{error.message}</span>
      )}
    </div>
  );
};

export default CustomInput;
