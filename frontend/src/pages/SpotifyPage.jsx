import React from 'react';

const SpotifyPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-animated-neon text-white text-center">
      <h1 className="text-4xl font-bold text-green-400 mb-6 animate-fade-in">
        🎵 PeaceBloom Spotify Playlist
      </h1>
      <p className="text-gray-300 mb-10">Enjoy peaceful lo-fi, ambient, or meditative vibes to help you heal.</p>

      <div className="max-w-3xl mx-auto shadow-lg border border-green-500 rounded-xl overflow-hidden animate-slide-in">
        <iframe
          title="Peaceful Spotify Playlist"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator"
          width="100%"
          height="400"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyPage;
