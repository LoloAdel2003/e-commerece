import React from 'react';
function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array(4).fill(0).map((_, i) => (
        <div key={i} className="bg-gray-200 h-48 rounded animate-pulse"></div>
      ))}
    </div>
  );
}
export default ProductsSkeleton;