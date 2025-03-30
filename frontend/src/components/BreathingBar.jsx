import React, { useState, useEffect } from "react";

const BreathingBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInhale, setIsInhale] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (isInhale) return prev < 100 ? prev + 2 : 100;
        else return prev > 0 ? prev - 2 : 0;
      });
    }, 80);

    if (progress === 100) setIsInhale(false);
    if (progress === 0) setIsInhale(true);

    return () => clearInterval(interval);
  }, [isVisible, isInhale, progress]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-700">
      {/* 🌿 Logo Header (Transparent) */}
      {!isVisible && (
        <div
          className="text-white text-center py-12 cursor-pointer transition-opacity duration-500 animate-fade-in"
          onClick={() => setIsVisible(true)}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }} // Add semi-transparent background
        >
          <h1 className="text-5xl font-extrabold text-neon-green tracking-wide mb-3">
            PeaceBloom
          </h1>
          <p className="text-xl text-gray-400">
            Tap here to begin your mindful breathing
          </p>
        </div>
      )}

      {/* 🧘‍♀️ Breathing Session */}
      {isVisible && (
        <div
          className="bg-gray-800 text-white py-8 transition-opacity duration-500 animate-fade-in text-center cursor-pointer"
          onClick={() => setIsVisible(false)}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
        >
          <br></br>

          <h2 className="text-3xl font-bold mb-2">
            {isInhale ? "Inhale..." : "Exhale..."}
          </h2>

          <p className="text-gray-400 text-md">
            Just breathe. Let it guide you back to calm.
          </p>

          <div className="w-[20%] mx-auto">
            <div
              className="h-2 bg-neon-green rounded-full mb-4 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

        </div>
      )}
    </div>
  );
};

export default BreathingBar;