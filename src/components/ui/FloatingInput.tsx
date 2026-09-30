"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
export const FloatingInput = React.forwardRef<
  HTMLInputElement,
  FloatingInputProps
>(({ className, label, error, id, ...props }, ref) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;
  return (
    <div className="editorial-field">
      <label htmlFor={inputId}>
        {label}
        {props.required ? " *" : ""}
      </label>
      <input
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${inputId}-error` : props["aria-describedby"]
        }
        className={cn(className)}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} role="alert" className="field-error">
          {error}
        </p>
      )}
    </div>
  );
});
FloatingInput.displayName = "FloatingInput";
