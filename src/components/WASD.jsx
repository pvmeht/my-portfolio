// components/WASD.jsx
import React from 'react';

const directions = [
  { key: 'W', label: 'Up' },
  { key: 'A', label: 'Left' },
  { key: 'S', label: 'Down' },
  { key: 'D', label: 'Right' },
];

const WASD = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 shadow-lg flex flex-col gap-1 text-xs">
      {directions.map((dir) => (
        <div
          key={dir.key}
          className="text-gray-800 dark:text-white font-semibold text-center hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition"
        >
          {dir.key}
        </div>
      ))}
    </div>
  );
};

export default WASD;
