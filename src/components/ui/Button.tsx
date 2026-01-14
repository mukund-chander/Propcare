import React from "react";
import Link from "next/link";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

// Simple utility for now since we don't have clsx/tailwind-merge setup yet or if we do
// I'll create a simple one or just use template literals if simple.
// Actually, let's just use template literals for simplicity as requested "No runtime errors".
// But `cn` is standard. I'll define a local helper or assume I can create lib/utils.ts later.
// For now, I'll inline the classes logic to be safe and dependency-free.

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-gold hover:bg-yellow-600 text-white focus:ring-brand-gold",
    secondary: "bg-brand-deep-purple hover:bg-purple-900 text-white focus:ring-brand-deep-purple",
    outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white focus:ring-brand-gold",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-500",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
