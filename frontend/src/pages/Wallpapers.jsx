import React from 'react';
import NewspaperBackground from '../components/NewspaperBackground';

const papers = [
  { title: "🌄 Embrace the Journey", url: "/assets/wallpapers/1.png" },
  { title: "🌸 Bloom with Positivity", url: "/assets/wallpapers/2.png" },
  { title: "🌌 Reach for the Stars", url: "/assets/wallpapers/3.png" },
  { title: "🌿 Find Peace in Nature", url: "/assets/wallpapers/4.png" },
  { title: "🏝️ Tranquility Awaits", url: "/assets/wallpapers/5.png" },
  { title: "🌾 Calm Your Mind", url: "/assets/wallpapers/6.png" },
];

const Wallpapers = () => {
  return (
    <div className="min-h-screen pt-64 pb-16 px-6 bg-gradient-to-b from-white to-gray-200 text-black text-center relative">
      {/* Newspaper Background Effect */}
      <NewspaperBackground />

      <h1 className="text-4xl font-bold text-black mb-6">
        🖼️ Download Peaceful Wallpapers
      </h1>
      <p className="text-gray-700 font-bold mb-10">
        Click any wallpaper to download and bring calm to your device 💻📱
      </p>

      {/* Wallpapers Grid */}
      <div className="grid grid-cols-6 gap-8 max-w-full mx-auto">
        {papers.map((wallpaper, index) => (
          <a
            key={index}
            href={wallpaper.url}
            download
            className="bg-black border border-neon-green rounded-xl overflow-hidden shadow-lg hover:scale-110 transition-all"
          >
            <img
              src={wallpaper.url}
              alt={wallpaper.title}
              className="w-full h-full object-cover"
              style={{ aspectRatio: '9 / 16', maxHeight: '1200px' }} // 3x bigger size
            />
            <div className="p-4 text-neon-cyan font-semibold">{wallpaper.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Wallpapers;
