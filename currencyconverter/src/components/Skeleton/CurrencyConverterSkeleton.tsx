import React from 'react';
import Skeleton from './Skeleton';

const CurrencyConverterSkeleton = React.memo(() => {
  return (
    <>
      <div className="w-full px-3 sm:px-4">
        <Skeleton variant="text" width="40%" height="28px" className="sm:w-60%" />
      </div>
      
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2 sm:gap-4 sm:gap-6 w-full">
        {/* Input FROM Skeleton */}
        <div className="flex flex-row items-center w-full sm:flex-1 min-w-0 h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md border-wl-neutral-200">
          <Skeleton variant="text" width="45%" height="20px" className="sm:w-55%" />
          <div className="flex items-center gap-1 ml-auto shrink-0">
            <Skeleton variant="circular" width={24} height={24} />
            <Skeleton variant="text" width="35px" height="18px" />
            <Skeleton variant="text" width="10px" height="10px" />
          </div>
        </div>
        
        {/* Swap Button Skeleton */}
        <div className="flex justify-center sm:justify-start">
          <Skeleton variant="rectangular" width={48} height={48} className="rounded-full" />
        </div>
        
        {/* Input TO Skeleton */}
        <div className="flex flex-row items-center w-full sm:flex-1 min-w-0 h-11 px-3 sm:px-4 py-3 bg-white border-2 rounded-2xl shadow-md border-wl-neutral-200">
          <Skeleton variant="text" width="45%" height="20px" className="sm:w-55%" />
          <div className="flex items-center gap-1 ml-auto shrink-0">
            <Skeleton variant="circular" width={24} height={24} />
            <Skeleton variant="text" width="35px" height="18px" />
            <Skeleton variant="text" width="10px" height="10px" />
          </div>
        </div>
      </div>
      
      {/* Summary Skeleton */}
      <div className="flex flex-col items-center gap-1 sm:gap-2 w-full mt-2">
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full px-2">
          <Skeleton variant="text" width="130px" height="44px" className="sm:h-12 lg:h-16" />
          <Skeleton variant="text" width="24px" height="36px" className="sm:h-8" />
          <Skeleton variant="text" width="130px" height="44px" className="sm:h-12 lg:h-16" />
        </div>
        <Skeleton variant="text" width="65%" height="16px" />
      </div>
    </>
  );
});

CurrencyConverterSkeleton.displayName = 'CurrencyConverterSkeleton';

export default CurrencyConverterSkeleton;
