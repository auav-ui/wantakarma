import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center py-2.5 px-8 rounded-[20px] md:rounded-[28px] gap-2 font-tt-squares !text-h6 md:!text-h4 whitespace-nowrap font-medium transition-all border-4 md:border-6 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "text-light-1 hover:text-dark-2 bg-accents-grey-4 hover:bg-accents-yellow-3 active:bg-accents-yellow-4 border-accents-yellow-3 active:border-accents-yellow-4",
        secondary:
          "text-dark-2 hover:text-light-1 bg-accents-white-1 hover:bg-accents-grey-3 active:bg-accents-grey-4 border-accents-grey-3 active:border-accents-grey-4",
        ghost:
          "text-accents-grey-3 hover:text-dark-2 active:text-accents-grey-2 border-accents-grey-3 hover:border-dark-2 active:border-accents-grey-2",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
