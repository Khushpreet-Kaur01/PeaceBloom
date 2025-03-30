import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen pt-24 pb-12 px-6 bg-[#1a1a1a] text-white flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-[#2a2a2a] border border-neon-cyan rounded-2xl p-8 shadow-xl animate-fade-in">
        <h1 className="text-3xl font-bold text-neon-pink text-center mb-6">Login to PeaceBloom 🌸</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-cyan text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">💬 Write this affirmation (CAPTCHA)</label>
            <p className="text-sm text-purple-300 font-semibold mb-2 italic">"{displayedAffirmation}"</p>
            <input
              type="text"
              placeholder="Type the affirmation above"
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-pink text-white"
              value={inputAffirmation}
              onChange={(e) => setInputAffirmation(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neon-cyan text-black font-semibold py-3 rounded-lg hover:scale-105 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
