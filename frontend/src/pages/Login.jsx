import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import NewspaperBackground from '../components/NewspaperBackground';

const affirmations = [
  "You are loved.",
  "You matter.",
  "Today is a fresh start.",
  "I am enough.",
  "I believe in myself.",
  "I choose peace today.",
  "I am strong and resilient.",
  "This moment is a new beginning.",
  "I am growing every day.",
  "My mental health matters."
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputAffirmation, setInputAffirmation] = useState('');
  const [displayedAffirmation, setDisplayedAffirmation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];
    setDisplayedAffirmation(random);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputAffirmation.trim().toLowerCase() !== displayedAffirmation.toLowerCase()) {
      alert("🛑 Please type the affirmation exactly to continue.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Logged in successfully!");
      navigate("/journal");
    } catch (error) {
      console.error(error.message);
      alert("❌ Login failed: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-200 text-black relative overflow-hidden z-0">
      <NewspaperBackground textColor="black" />
      <main className="z-10 max-w-md w-full bg-white border border-gray-300 rounded-2xl p-8 shadow-xl animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Login to PeaceBloom 🌱</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">💬 Write this affirmation (CAPTCHA)</label>
            <p className="text-sm text-green-600 font-semibold mb-2 italic">"{displayedAffirmation}"</p>
            <input
              type="text"
              placeholder="Type the affirmation above"
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black text-black"
              value={inputAffirmation}
              onChange={(e) => setInputAffirmation(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-lg shadow-xl hover:bg-gray-900 hover:shadow-2xl border border-white transition-all duration-300"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
