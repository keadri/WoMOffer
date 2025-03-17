import React from 'react';

const PlaceholderImage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="text-center p-4">
        <svg 
          className="w-12 h-12 mx-auto text-gray-400 mb-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <p className="text-gray-500 text-sm">图片加载失败</p>
      </div>
    </div>
  );
};

export default PlaceholderImage; 