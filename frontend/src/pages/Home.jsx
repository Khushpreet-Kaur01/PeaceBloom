import React from 'react';
import { Link } from 'react-router-dom';
import NewspaperBackground from '../components/NewspaperBackground';


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-200 flex items-center justify-center px-4 sm:px-8 py-16 relative overflow-hidden">
      {/* Newspaper Background */}
      <NewspaperBackground textColor="black" />
      
      <div className="bg-black p-10 rounded-3xl shadow-2xl w-full max-w-3xl text-white text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold text-green-500 tracking-tight mb-4">
           <span className="text-yellow-400">🌸</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
          A peaceful space to journal your thoughts. It also detects your mood and adapts accordingly using AI, and access healing tools like music, affirmations, and art.  
          Discover calm through expression, reflection, and technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          
          <Link to="/journal" className="px-6 py-3 rounded-full bg-black hover:bg-pink-500 text-white font-semibold shadow-md border border-green-400 transition-all">
  Start Journaling
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
