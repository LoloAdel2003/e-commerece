
import React from 'react';
 const SkeletonCard = () => (
    <div className="w-[270px] h-[350px] bg-gray-200 animate-pulse rounded-[4px] flex flex-col">
      <div className="h-[250px] bg-gray-300 rounded-t-[4px] mb-4"></div>
      <div className="px-3 flex flex-col gap-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 mt-auto"></div>
      </div>
    </div>
  );
  export default SkeletonCard;