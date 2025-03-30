import React from 'react';

const quotes = [
  "🌅 Every sunrise is an invitation to brighten someone’s day.",
  "🧠 Your mind is a garden. Your thoughts are the seeds. You can grow flowers or weeds.",
  "🌊 You don’t have to control your thoughts. You just have to stop letting them control you.",
  "🌿 Peace begins with a deep breath.",
  "💡 Small steps every day lead to big changes.",
  "🪞 You are more than enough, exactly as you are."
];

const Quotes = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-animated-neon text-white text-center">
      <h1 className="text-4xl font-bold text-neon-yellow mb-8 animate-fade-in">
        🌟 Daily Affirmations & Motivational Quotes
      </h1>

      <div className="grid gap-6 max-w-3xl mx-auto animate-slide-in">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] text-lg text-neon-green p-6 rounded-xl shadow-md border border-neon-yellow hover:scale-105 transition-all duration-300"
          >
            {quote}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
