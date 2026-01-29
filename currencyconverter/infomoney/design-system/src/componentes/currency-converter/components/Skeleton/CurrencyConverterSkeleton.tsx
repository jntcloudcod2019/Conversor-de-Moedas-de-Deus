import React from 'react';

interface CurrencyConverterSkeletonProps {
  isMobile?: boolean;
}

const SkeletonElement: React.FC<{ 
  width?: string | number; 
  height?: string | number; 
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}> = ({ width = '100%', height = '1rem', className = '', variant = 'rectangular' }) => {
  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: variant === 'circular' ? '50%' : '4px',
  };

  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded',
  };

  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${variantClasses[variant]} ${className}`}
      style={style}
      aria-label="Carregando..."
      role="status"
    />
  );
};

export const CurrencyConverterSkeleton: React.FC<CurrencyConverterSkeletonProps> = ({
  isMobile = false,
}) => {
  if (isMobile) {
    return (
      <>
        <SkeletonElement variant="text" width="60%" height="28px" className="mb-2" />
        
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex flex-row items-center justify-between w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md" style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}>
            <SkeletonElement variant="text" width="40%" height="20px" />
            <div className="flex items-center gap-1">
              <SkeletonElement variant="circular" width={20} height={20} />
              <SkeletonElement variant="text" width="30px" height="16px" />
              <SkeletonElement variant="text" width="8px" height="8px" />
            </div>
          </div>

          <SkeletonElement variant="rectangular" width={48} height={48} className="rounded-full" />

          <div className="flex flex-row items-center justify-between w-full h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md" style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}>
            <SkeletonElement variant="text" width="40%" height="20px" />
            <div className="flex items-center gap-1">
              <SkeletonElement variant="circular" width={20} height={20} />
              <SkeletonElement variant="text" width="30px" height="16px" />
              <SkeletonElement variant="text" width="8px" height="8px" />
            </div>
          </div>

          <SkeletonElement variant="text" width="80%" height="16px" className="mt-2" />
        </div>
      </>
    );
  }

  return (
    <>
      <SkeletonElement variant="text" width="40%" height="28px" className="mb-2" />
      
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full">
        <div className="flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md" style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}>
          <SkeletonElement variant="text" width="50%" height="20px" />
          <div className="flex items-center gap-1 ml-auto">
            <SkeletonElement variant="circular" width={20} height={20} />
            <SkeletonElement variant="text" width="30px" height="16px" />
            <SkeletonElement variant="text" width="8px" height="8px" />
          </div>
        </div>

        <div className="flex justify-center sm:justify-start">
          <SkeletonElement variant="rectangular" width={48} height={48} className="rounded-full" />
        </div>

        <div className="flex flex-row items-center flex-1 min-w-0 h-11 px-4 py-3 bg-white border-2 rounded-2xl shadow-md" style={{ borderColor: 'rgba(0, 0, 0, 0.35)', borderWidth: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }}>
          <SkeletonElement variant="text" width="50%" height="20px" />
          <div className="flex items-center gap-1 ml-auto">
            <SkeletonElement variant="circular" width={20} height={20} />
            <SkeletonElement variant="text" width="30px" height="16px" />
            <SkeletonElement variant="text" width="8px" height="8px" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full px-2">
          <SkeletonElement variant="text" width="120px" height="40px" className="sm:h-12 lg:h-16" />
          <SkeletonElement variant="text" width="20px" height="32px" className="sm:h-8" />
          <SkeletonElement variant="text" width="120px" height="40px" className="sm:h-12 lg:h-16" />
        </div>
        <SkeletonElement variant="text" width="60%" height="16px" />
      </div>
    </>
  );
};
