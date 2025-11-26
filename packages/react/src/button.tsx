import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, type, ...props }, ref) => {
    
    return (
      <button
        ref={ref}
        type={type || "button"}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
