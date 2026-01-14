import React, { forwardRef } from "react";
import profile from "../data/profile";

const ResumeDownloadButton = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="fixed bottom-6 left-6 z-50">
      <a
        href={profile.resume}
        download={`${profile.fullName}_Resume.pdf`}
        className="relative group bg-white/30 dark:bg-black/30 backdrop-blur-md border border-[#F2E9E4] text-[#F2E9E4] rounded-full p-2 flex items-center justify-center shadow-lg transition-all hover:scale-105 hover:bg-[#22223B] shadow-black"
        title="Download Resume"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>

        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#1C1C3A] rounded-full animate-ping pointer-events-none" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#1C1C3A] rounded-full" />
      </a>
    </div>
  );
});

export default ResumeDownloadButton;