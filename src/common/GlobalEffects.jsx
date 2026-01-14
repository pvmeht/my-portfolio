// src/components/GlobalEffects.jsx
import React from 'react';
import ClickSpark from './ClickSpark'; // Adjust path if needed
import Ribbons from './Ribbons';       // Adjust path if needed

const GlobalEffects = ({ children }) => {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Ribbons layer (background) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Ribbons
            baseThickness={30}
            colors={['#ffffff']}
            speedMultiplier={0.5}
            maxAge={500}
            enableFade={false}
            enableShaderEffect={true}
          />
        </div>

        {/* App Content layer */}
        <div className="relative z-10">
          {children} {/* ✅ VERY IMPORTANT */}
        </div>
      </div>
    </ClickSpark>
  );
};

export default GlobalEffects;
