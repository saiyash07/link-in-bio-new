import { motion } from "framer-motion";
import { buttonHover } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className,
  onClick,
  type = "button",
  disabled = false
}: ButtonProps) => {
  const baseStyles = "rounded-2xl font-semibold transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-primary-foreground shadow-[0_0_40px_hsla(42,88%,65%,0.15)] hover:shadow-[0_0_60px_hsla(42,88%,65%,0.3)]",
    secondary: "glass-card text-foreground border border-border/50",
    ghost: "bg-transparent text-foreground hover:bg-muted",
    neon: "bg-transparent text-accent border-2 border-neon shadow-[0_0_20px_hsla(250,100%,75%,0.4)] hover:shadow-[0_0_40px_hsla(250,100%,75%,0.6)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
