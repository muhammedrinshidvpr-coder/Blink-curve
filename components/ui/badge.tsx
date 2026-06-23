import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]",
        brand:
          "bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE]",
        success:
          "bg-[#ECFDF5] text-[#10B981] border border-[#D1FAE5]",
        warning:
          "bg-[#FFFBEB] text-[#D97706] border border-[#FEF3C7]",
        danger:
          "bg-[#FEF2F2] text-[#EF4444] border border-[#FECACA]",
        outline:
          "border border-[#E2E8F0] text-[#475569]",
        critical:
          "bg-[#FEF2F2] text-[#EF4444] border border-[#FECACA] animate-pulse",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
