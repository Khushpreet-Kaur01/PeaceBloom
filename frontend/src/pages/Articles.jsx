import React from 'react';

const articles = [
  {
    title: "🧘 5-Minute Mindfulness for Beginners",
    description: "Learn how to slow down and become present using easy mindfulness techniques.",
    link: "https://www.mindful.org/mindfulness-how-to-do-it/",
  },
  {
    title: "💡 Understanding Anxiety: A Gentle Guide",
    description: "Break down what anxiety really is and how you can manage it naturally.",
    link: "https://www.anxiety.org/what-is-anxiety",
  },
  {
    title: "🌿 Grounding Techniques That Actually Work",
    description: "Use your senses to bring calm during anxious moments.",
    link: "https://www.verywellmind.com/grounding-techniques-2584214",
  },
  {
    title: "🧠 The Power of Positive Thinking",
    description: "How shifting your mindset can improve your mental well-being.",
    link: "https://www.psychologytoday.com/us/basics/positive-thinking",
  },
  {
    title: "🛀 Self-Care for Stress Relief",
    description: "Simple self-care practices you can do to relax and recharge.",
    link: "https://www.mentalhealth.org.uk/publications/guide-stress-relief-and-self-care",
  },
  {
    title: "🌙 Tips for Better Sleep and Relaxation",
    description: "Effective techniques to improve your sleep and feel more rested.",
    link: "https://www.sleepfoundation.org/sleep-hygiene",
  },
  {
    title: "🌸 How to Build Healthy Relationships",
    description: "Understand the keys to maintaining healthy personal connections.",
    link: "https://www.helpguide.org/articles/relationships-communication/building-healthy-relationships.htm",
  },
  {
    title: "💖 Cultivating Gratitude for Better Mental Health",
    description: "How practicing gratitude can enhance emotional well-being.",
    link: "https://greatergood.berkeley.edu/article/item/why_gratitude_is_good",
  },
  {
    title: "📚 Building Emotional Resilience",
    description: "Develop skills to bounce back from life’s challenges.",
    link: "https://www.verywellmind.com/resilience-skills-to-help-you-thrive-4783910",
  }

];

const Articles = () => {
  return (
    <div className="min-h-screen pt-36 pb-12 px-6 text-white text-center bg-gradient-to-b from-white to-gray-200 relative overflow-hidden">

    <h1 className="text-4xl font-bold text-center text-black mb-10 animate-fade-in mt-12">
      📖 Helpful Articles for Mental Wellness
    </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <p className="text-gray-300 mt-2">
              {article.description}
            </p>
            <p className="text-sm mt-4 text-neon-pink group-hover:text-white transition">
              Read →
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Articles;