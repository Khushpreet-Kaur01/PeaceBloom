import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from '../firebase';
import JournalHistory from './JournalHistory';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mood, setMood] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!entry.trim()) return;

    const moods = ['happy', 'sad', 'stressed', 'calm', 'neutral'];
    const detectedMood = moods[Math.floor(Math.random() * moods.length)];

    try {
      await addDoc(collection(db, 'journals'), {
        text: entry,
        createdAt: Timestamp.now(),
        mood: detectedMood,
      });

      setMood(detectedMood);
      setSubmitted(true);
    } catch (error) {
      console.error('Error saving entry:', error);
      alert('Failed to save journal entry.');
    }
  };

  const handleHistoryClick = (entry) => {
    setEntry(entry.text);
    setMood(entry.mood);
    setSubmitted(true);
    setShowHistory(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-animated-neon text-white relative">
      <JournalHistory
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        onSelectEntry={handleHistoryClick}
      />

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

      {submitted && mood && !showHistory && (
        <div className="mt-10 text-center animate-slide-in">
          <h2 className="text-xl font-semibold text-neon-green mb-2">
            🧠 Mood Detected: {mood.toUpperCase()}
          </h2>

          <div className="mb-4 flex justify-center gap-4">
            <button
              onClick={() => setShowHistory(true)}
              className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
            >
              📖 View History
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link to="/youtube" className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">🎥 YouTube Playlist</Link>
            <Link to="/spotify" className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">🎧 Spotify</Link>
            <Link to="/articles" className="px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">📖 Articles</Link>
            <Link to="/quotes" className="px-5 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition">🌟 Quotes</Link>
            <Link to="/wallpapers" className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">🖼️ Wallpapers</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;
