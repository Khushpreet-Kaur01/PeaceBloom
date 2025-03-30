import React from 'react';

const hello = [
  "🌅 Every sunrise is an invitation to brighten someone’s day.",
  "🧠 Your mind is a garden. Your thoughts are the seeds. You can grow flowers or weeds.",
  "🌊 You don’t have to control your thoughts. You just have to stop letting them control you.",
  "🌿 Peace begins with a deep breath.",
  "💡 Small steps every day lead to big changes.",
  "🪞 You are more than enough, exactly as you are.",
  "✨ Inhale the future, exhale the past.",
  "🌸 Every day is a new beginning. Take a deep breath, smile, and start again.",
  "💎 Challenges are what make life interesting. Overcoming them is what makes it meaningful.",
  "🌻 Find joy in the little things. They add up to a big life."
];

const Quotes = () => {
  return (
    <div className="min-h-screen pt-48 pb-24 px-6 bg-gradient-to-b from-white to-gray-200 text-black text-center relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 bg-transparent overflow-hidden">
        <div className="w-full h-full flex flex-col justify-start gap-2 px-4">
          {Array(20).fill(null).map((_, i) => (
            <div
              key={i}
              className={`line whitespace-nowrap font-mono text-sm text-green-400 tracking-wide ${
                i % 2 === 0 ? "scroll-left" : "scroll-right"
              }`}
            >
              {hello[i % hello.length].repeat(50)}
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-4xl font-bold text-black mb-8 animate-fade-in">
        🌟 Daily Affirmations & Motivational Quotes
      </h1>

      <div className="grid gap-6 max-w-3xl mx-auto animate-slide-in">
        {hello.map((quote, index) => (
          <div
            key={index}
            className="bg-black text-lg text-green-400 p-6 rounded-xl shadow-md border border-white hover:scale-105 transition-all duration-300"
          >
            {quote}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
