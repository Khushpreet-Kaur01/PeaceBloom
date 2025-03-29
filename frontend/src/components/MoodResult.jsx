// src/components/MoodResult.jsx
import React from 'react';

const MoodResult = ({ mood }) => {
  const moodColors = {
    happy: 'text-green-400',
    sad: 'text-blue-400',
    angry: 'text-red-400',
    calm: 'text-cyan-400',
    stressed: 'text-yellow-400',
    neutral: 'text-gray-300'
  };

  return (
    <div className={`mt-6 p-4 rounded-xl bg-[#2a2a2a] text-center shadow-lg ${moodColors[mood] || 'text-white'}`}>
      <h2 className="text-xl font-semibold">🧠 Detected Mood: {mood || 'neutral'}</h2>
      <p className="text-sm text-gray-400 mt-1">Resources below are personalized for your state of mind.</p>
    </div>
  );
};

export default MoodResult;
