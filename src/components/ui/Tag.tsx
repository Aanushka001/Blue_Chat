import * as React from "react";
import { X } from "lucide-react";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  variant?: 'default' | 'secondary' | 'outline';
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ children, onRemove, variant = 'default', className = '', ...props }, ref) => {
    const variantClasses = {
      default: 'bg-blue-100 text-blue-800',
      secondary: 'bg-gray-100 text-gray-800',
      outline: 'border border-gray-200 text-gray-800'
    };

    return (
      <div
        ref={ref}
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1 inline-flex items-center rounded-full p-0.5 hover:bg-blue-200"
            aria-label="Remove tag" // Add accessible label
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  }
);

Tag.displayName = "Tag";
