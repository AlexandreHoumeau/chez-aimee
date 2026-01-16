import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    bgColor?: 'primary' | 'pink' | 'background';
    textColor?: 'white' | 'pink' | 'primary' | 'background';
    rightIcon?: LucideIcon;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ 
        children, 
        bgColor = 'primary', 
        textColor = 'white',
        rightIcon: RightIcon,
        className = '',
        ...props 
    }, ref) => {

        return (
            <button
                ref={ref}
                className={`inline-flex items-center text-lg gap-2 px-7 py-2 text-${textColor} hover:opacity-90 font-bold transition-colors rounded-full bg-${bgColor} ${className}`}
                {...props}
            >
                {children}
                {RightIcon && <RightIcon size={20} />}
            </button>
        );
    }
);

Button.displayName = 'Button';