// components/ui/Skeleton.tsx
import React from 'react';

export const PostSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse bg-white rounded-2xl shadow-sm mb-6 overflow-hidden border border-gray-200">
      <div className="flex items-center gap-3 p-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="w-24 h-3 bg-gray-300 rounded" />
          <div className="w-16 h-3 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="w-full h-64 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="w-3/4 h-3 bg-gray-300 rounded" />
        <div className="w-1/2 h-3 bg-gray-200 rounded" />
      </div>
    </div>
  );
};
