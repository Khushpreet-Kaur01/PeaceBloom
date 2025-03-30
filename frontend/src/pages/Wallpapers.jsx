import React from 'react';

const wallpapers = [
  {
    title: "🌄 Calm Mountains",
    url: "/assets/wallpapers/mountains.jpg"
  },
  {
    title: "🌸 Blooming Peace",
    url: "/assets/wallpapers/flowers.jpg"
  },
  {
    title: "🌌 Starry Night",
    url: "/assets/wallpapers/starry.jpg"
  },
  {
    title: "🌿 Forest Breath",
    url: "/assets/wallpapers/forest.jpg"
  }
];

const Wallpapers = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-animated-neon text-white text-center">
      <h1 className="text-4xl font-bold text-blue-400 mb-6 animate-fade-in">
        🖼️ Download Peaceful Wallpapers
      </h1>
      <p className="text-gray-300 mb-10">
        Click any wallpaper to download and bring calm to your device 💻📱
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto animate-slide-in">
        {wallpapers.map((wallpaper, index) => (
          <a
            key={index}
            href={wallpaper.url}
            download
            className="bg-[#2a2a2a] border border-blue-400 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all"
          >
            <img
              src={wallpaper.url}
              alt={wallpaper.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-neon-cyan font-semibold">{wallpaper.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Wallpapers;
