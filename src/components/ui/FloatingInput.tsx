"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, label, error, required, value, defaultValue, type = "text", ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    
    const hasValue = React.useMemo(() => {
      if (value !== undefined && value !== null) return String(value).length > 0;
      if (defaultValue !== undefined && defaultValue !== null) return String(defaultValue).length > 0;
      return false;
    }, [value, defaultValue]);

    const [hasInternalValue, setHasInternalValue] = React.useState(hasValue);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasInternalValue(e.target.value.length > 0);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasInternalValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const isFloated = isFocused || hasValue || hasInternalValue;

    return (
      <div className="relative w-full pt-6 pb-2">
        <motion.label
          initial={false}
          animate={{
            y: isFloated ? -24 : 0,
            scale: isFloated ? 0.85 : 1,
            color: error 
              ? "#ef4444" 
              : isFloated 
                ? "var(--color-primary)" 
                : "var(--color-text-muted)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={cn(
            "absolute left-0 top-6 origin-left cursor-text pointer-events-none",
            isFloated ? "font-medium" : ""
          )}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </motion.label>
        
        <input
          ref={ref}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
          className={cn(
            "w-full bg-transparent border-b border-[var(--color-border)] px-0 py-2 text-[var(--color-text)] placeholder-transparent focus:outline-none focus:border-[var(--color-primary)] transition-shadow duration-300",
            isFocused && !error && "shadow-[0_1px_8px_-2px_var(--color-primary)]",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -5 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";
