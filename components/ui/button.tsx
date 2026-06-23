"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF] shadow-[0_1px_2px_rgba(37,99,235,0.2),0_4px_12px_rgba(37,99,235,0.18)] hover:shadow-[0_2px_4px_rgba(37,99,235,0.25),0_8px_20px_rgba(37,99,235,0.22)]",
        secondary:
          "bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] hover:bg-[#E2E8F0] hover:border-[#CBD5E1]",
        outline:
          "border border-[#E2E8F0] text-[#475569] hover:border-[#CBD5E1] hover:text-[#0F172A] hover:bg-[#F8FAFC]",
        ghost:
          "text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9]",
        danger:
          "bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#B91C1C] shadow-[0_1px_2px_rgba(239,68,68,0.2)]",
        link:
          "text-[#2563EB] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        default: "h-10 px-5 py-2",
        lg: "h-12 px-8 text-base rounded-xl",
        xl: "h-14 px-10 text-lg rounded-xl",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
