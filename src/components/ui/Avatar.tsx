import React from "react";
import Image from "next/image";

export const Avatar = React.forwardRef<HTMLImageElement, { src: string; alt: string; size: "sm" | "md" | "lg"; status?: "online" | "offline" | "away" }>(({ src, alt, size, status }, ref) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    away: "bg-yellow-500"
  };

  return (
    <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden`}>
      <Image src={src} alt={alt} className="object-cover" width={40} height={40} />
      {status && (
        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${statusColors[status]}`}></span>
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";
