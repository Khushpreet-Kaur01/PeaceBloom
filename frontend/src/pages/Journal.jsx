import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mood, setMood] = useState(null); // mock mood detection for now

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!entry.trim()) return;

    // ✨ Mock mood detection:
    const moods = ['happy', 'sad', 'stressed', 'calm', 'neutral'];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(randomMood);

    setSubmitted(true);
    setEntry('');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-[#1a1a1a] text-white">
      <h1 className="text-4xl font-bold text-center text-neon-cyan mb-6">📝 Today’s Journal</h1>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col gap-4 animate-fade-in">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="How are you feeling today? Write freely…"
          rows={8}
          className="w-full p-5 text-lg bg-[#2a2a2a] text-white border border-neon-cyan rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-cyan placeholder:text-gray-400 resize-none"
        />

        <button
          type="submit"
          className="self-center px-6 py-3 rounded-full bg-neon-pink text-white font-semibold shadow-md hover:scale-105 transition-all"
        >
          Save Entry
        </button>
      </form>

      {submitted && mood && (
        <div className="mt-10 text-center animate-slide-in">
          <h2 className="text-xl font-semibold text-neon-green mb-2">🧠 Mood Detected: {mood.toUpperCase()}</h2>
          <p className="text-gray-400 mb-6">
            Based on your writing, here are some calming resources to explore:
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link to="/youtube" className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">🎥 YouTube Playlist</Link>
            <Link to="/spotify" className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">🎧 Spotify</Link>
            <Link to="/articles" className="px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">📖 Articles</Link>
            <Link to="/quotes" className="px-5 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition">🌟 Quotes</Link>
            <Link to="/wallpapers" className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">🖼️ Wallpapers</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;
