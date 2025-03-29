import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#1a1a1a] text-white text-center flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-neon-green mb-6 tracking-tight animate-fade-in">
        PeaceBloom 🌸
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl mb-10 animate-slide-in">
        A peaceful space to journal your thoughts, reflect with AI, and access healing tools like music, affirmations, and art.  
        Discover calm through expression, reflection, and technology.
      </p>

      <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
        <Link
          to="/login"
          className="px-6 py-3 rounded-full bg-neon-pink text-white font-medium shadow-md hover:scale-105 transition"
        >
          Login
        </Link>
        <Link
          to="/journal"
          className="px-6 py-3 rounded-full bg-neon-cyan text-black font-medium shadow-md hover:scale-105 transition"
        >
          Start Journaling
        </Link>
        <Link
          to="/wallpapers"
          className="px-6 py-3 rounded-full bg-purple-700 text-white font-medium shadow-md hover:scale-105 transition"
        >
          Wallpapers
        </Link>
      </div>

      <div className="mt-16 max-w-3xl animate-fade-in">
        <p className="text-sm text-gray-400">
          PeaceBloom is your AI-powered sanctuary — write freely, grow emotionally, and unlock music, quotes, and guidance based on how you feel.  
          No judgment. Just healing. 🌿
        </p>
      </div>
    </div>
  );
};

export default Home;
