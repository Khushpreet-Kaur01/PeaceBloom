// src/pages/JournalHistory.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import db from '../firebase';

const JournalHistory = ({ isOpen, onClose, onSelectEntry }) => {
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

    if (isOpen) fetchEntries();
  }, [isOpen]);

  return (
    <div className={`fixed top-0 left-0 h-full w-80 bg-[#121212] text-white shadow-xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-neon-cyan">📚 Journal History</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">✖</button>
      </div>
      <div className="p-4 overflow-y-auto max-h-[calc(100vh-10rem)]"> {/* Add scroll and limit height */}
        {entries.length === 0 ? (
          <p className="text-sm text-gray-400">No entries found.</p>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              onClick={() => onSelectEntry(entry)}
              className="mb-4 border-b border-gray-600 pb-2 cursor-pointer hover:bg-[#1e1e1e] rounded px-2 py-1 transition"
            >
              <p className="text-sm text-gray-300 mb-1">{new Date(entry.createdAt.toDate()).toLocaleString()}</p>
              <p className="text-base">{entry.text}</p>
              <p className="text-xs text-yellow-400 mt-1">Mood: {entry.mood}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JournalHistory;
