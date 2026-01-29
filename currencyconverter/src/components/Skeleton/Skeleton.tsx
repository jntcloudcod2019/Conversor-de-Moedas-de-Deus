import React, { useMemo } from 'react';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

const Skeleton = React.memo<SkeletonProps>(({ 
  width = '100%', 
  height = '1rem', 
  className = '', 
  variant = 'rectangular' 
}) => {
  const style = useMemo<React.CSSProperties>(() => ({
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }), [width, height]);

  const variantClasses = useMemo(() => {
    const base = 'bg-gray-200 dark:bg-gray-700 animate-pulse';
    const variants = {
      text: 'rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-lg',
    };
    return `${base} ${variants[variant]}`;
  }, [variant]);

  return (
    <div 
      role="status" 
      aria-label="Carregando..."
      className={`${variantClasses} ${className}`}
      style={style}
    />
  );
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;
