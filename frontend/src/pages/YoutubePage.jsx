import React from 'react';

const YoutubePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-[#1a1a1a] text-white text-center">
      <h1 className="text-4xl font-bold text-red-400 mb-6 animate-fade-in">
        🎥 Peaceful YouTube Playlist
      </h1>
      <p className="text-gray-400 mb-10">Relax with calming videos curated for peace, reflection, and healing.</p>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-red-500 animate-slide-in">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ"
          title="Peaceful Playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubePage;
