import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from '../firebase';
import JournalHistory from './JournalHistory';
import NewspaperBackground from '../components/NewspaperBackground';

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-200 text-black relative overflow-hidden z-0">
      {/* Newspaper Background */}
      <NewspaperBackground textColor="black" />

      {/* Journal History with higher z-index */}
      <div className="z-[9999] fixed top-0 left-0">
        <JournalHistory
          isOpen={showHistory}
          onClose={() => setShowHistory(false)}
          onSelectEntry={handleHistoryClick}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-24 pb-12 px-6">
        <h1 className="text-4xl font-bold text-center text-black mb-7 mt-60">
          📝 Breathe. Feel. Write. Heal.
        </h1>

        {submitted && mood && !showHistory && (
          <div className="flex justify-center mb-10 mt-[-12px]">
            <div className="border-4 border-green-400 p-4 rounded-xl text-center text-white font-bold text-lg bg-black shadow-lg">
              🧠 Mood Detected: {mood.toUpperCase()}
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto flex flex-col gap-4 animate-fade-in mt-6"
        >
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="How are you feeling today? Write freely…"
            rows={8}
            className="w-full p-5 text-lg bg-white text-black border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-600 resize-none"
          />

          <button
            type="submit"
            className="self-center px-8 py-4 rounded-full bg-black text-white font-semibold shadow-xl border border-white hover:bg-gray-800 hover:shadow-2xl transition-all duration-300"
          >
            Save Entry
          </button>
        </form>

        {submitted && mood && !showHistory && (
          <div className="mt-10 text-center animate-slide-in">
            <div className="mb-6 flex justify-center gap-4">
              <button
                onClick={() => setShowHistory(true)}
                className="px-6 py-3 bg-black text-white rounded-lg border border-white shadow hover:bg-gray-800 hover:shadow-xl transition-all duration-300"
              >
                📖 View History
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <Link to="/youtube" className="px-6 py-3 bg-black text-white rounded-lg border border-white shadow hover:bg-gray-800 hover:shadow-xl transition-all duration-300">🎥 YouTube Playlist</Link>
              <Link to="/spotify" className="px-6 py-3 bg-black text-white rounded-lg border border-white shadow hover:bg-gray-800 hover:shadow-xl transition-all duration-300">🎧 Spotify</Link>
              <Link to="/articles" className="px-6 py-3 bg-black text-white rounded-lg border border-white shadow hover:bg-gray-800 hover:shadow-xl transition-all duration-300">📖 Articles</Link>
              <Link to="/quotes" className="px-6 py-3 bg-black text-white rounded-lg border border-white shadow hover:bg-gray-800 hover:shadow-xl transition-all duration-300">🌟 Quotes</Link>
              <Link to="/wallpapers" className="px-6 py-3 bg-black text-white rounded-lg border border-white shadow hover:bg-gray-800 hover:shadow-xl transition-all duration-300">🖼️ Wallpapers</Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Journal;