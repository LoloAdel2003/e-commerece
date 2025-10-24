import React from 'react';

const ProductItem = ({ name, price, imageSrc, quantity }) => {
  // تحويل السعر من نص لرقم
  const numericPrice = parseFloat(price.replace('$', ''));

  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center rounded overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div>
          <span className="text-gray-800 font-medium block">{name}</span>
          <span className="text-sm text-gray-500">Qty: {quantity}</span>
        </div>
      </div>
      <span className="text-gray-900 font-semibold">
  ${ (numericPrice * quantity).toLocaleString('en-US') }
</span>

    </div>
  );
};

export default ProductItem;
