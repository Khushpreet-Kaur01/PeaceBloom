import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [affirmation, setAffirmation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !affirmation) return;
    setSubmitted(true);

    // 🔐 This is where you’ll add Firebase auth logic later
    console.log('Login data:', { email, password, affirmation });
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
            <label className="block mb-1 text-gray-300">💬 Write an affirmation (instead of CAPTCHA)</label>
            <input
              type="text"
              placeholder="e.g., I deserve to feel peace."
              className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-pink text-white"
              value={affirmation}
              onChange={(e) => setAffirmation(e.target.value)}
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

        {submitted && (
          <p className="text-green-400 text-sm mt-4 text-center animate-fade-in">
            ✅ Login submitted. You’re entering a safe space.
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
