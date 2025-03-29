import React from 'react';

const articles = [
  {
    title: "🧘 5-Minute Mindfulness for Beginners",
    description: "Learn how to slow down and become present using easy mindfulness techniques.",
    link: "https://www.headspace.com/mindfulness",
  },
  {
    title: "💡 Understanding Anxiety: A Gentle Guide",
    description: "Break down what anxiety really is and how you can manage it naturally.",
    link: "https://www.verywellmind.com/what-is-anxiety-2794760",
  },
  {
    title: "🌿 Grounding Techniques That Actually Work",
    description: "Use your senses to bring calm during anxious moments.",
    link: "https://www.healthline.com/health/grounding-techniques",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-[#1a1a1a] text-white">
      <h1 className="text-4xl font-bold text-center text-neon-cyan mb-10 animate-fade-in">
        📖 Helpful Articles for Mental Wellness
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#2a2a2a] hover:bg-[#333] transition-all border border-neon-cyan p-6 rounded-xl shadow-lg group"
          >
            <h2 className="text-xl font-semibold text-neon-green group-hover:underline">
              {article.title}
            </h2>
            <p className="text-gray-300 mt-2">{article.description}</p>
            <p className="text-sm mt-4 text-neon-pink group-hover:text-white transition">Read →</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Articles;
