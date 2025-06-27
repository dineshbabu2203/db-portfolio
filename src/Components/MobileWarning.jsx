// src/Components/MobileWarning.jsx

import React from "react";

const MobileWarning = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center text-center z-50 p-6">
      <h1 className="text-2xl font-bold mb-4">🚫 Desktop View Recommended</h1>
      <p className="text-lg">
        This website is best viewed on a desktop or in desktop mode.
        <br />
        Please switch to desktop view for the best experience.
      </p>
    </div>
  );
};

export default MobileWarning;
