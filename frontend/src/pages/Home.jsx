// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-animated-neon flex items-center justify-center px-4 sm:px-8 py-16">
      <div className="bg-[#111] p-10 rounded-3xl shadow-2xl w-full max-w-3xl text-white text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold text-neon-green tracking-tight mb-4">
          PeaceBloom <span className="text-pink-400">🌸</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
          A peaceful space to journal your thoughts, reflect with AI, and access healing tools like music, affirmations, and art.  
          Discover calm through expression, reflection, and technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link to="/login" className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold shadow-md transition">
            Login
          </Link>
          <Link to="/journal" className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold shadow-md transition">
            Start Journaling
          </Link>
          <Link to="/wallpapers" className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md transition">
            Wallpapers
          </Link>
        </div>

        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          PeaceBloom is your AI-powered sanctuary — write freely, grow emotionally, and unlock music, quotes, and guidance  
          based on how you feel. No judgment. Just healing. 🪴
        </p>
      </div>
    </div>
  );
};

export default Home;
