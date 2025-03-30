import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import db from '../firebase';

const JournalHistoryPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const q = query(collection(db, 'journals'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEntries(data);
    };

    fetchEntries();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 pt-40 pb-10">
      {/* 👆 pt-40 pushes content below BreathingBar + Navbar */}
      
      <h1 className="text-3xl font-bold text-center text-[#00ffff] mb-6">📚 Journal History</h1>

      {entries.length === 0 ? (
        <p className="text-sm text-gray-400 text-center">No entries found.</p>
      ) : (
        <div className="max-w-2xl mx-auto space-y-4">
          {entries.map(entry => (
            <div
              key={entry.id}
              className="border-b border-gray-600 pb-2 hover:bg-[#1e1e1e] rounded px-4 py-2 transition"
            >
              <p className="text-sm text-gray-300 mb-1">
                {new Date(entry.createdAt.toDate()).toLocaleString()}
              </p>
              <p className="text-base">{entry.text}</p>
              <p className="text-xs text-green-400 mt-1">Mood: {entry.mood}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JournalHistoryPage;
