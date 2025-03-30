import React from 'react';
import NewspaperBackground from '../components/NewspaperBackground';

const SpotifyPage = () => {
  return (
    <div className="min-h-screen pt-36 pb-12 px-6 bg-gradient-to-b from-white to-gray-200 text-black text-center relative overflow-hidden">
      {/* Newspaper Background */}
      <NewspaperBackground textColor="black" />
      
      <h1 className="text-5xl font-bold text-black mb-6 animate-fade-in mt-32">
        🎵 PeaceBloom Spotify Playlist
      </h1>
      
      <p className="text-gray-700 font-semibold text-2xl mb-10 text-center">
        Enjoy peaceful lo-fi, ambient, or meditative vibes to help you heal.
      </p>

      <div className="max-w-4xl mx-auto shadow-lg border border-green-400 rounded-xl overflow-hidden animate-slide-in mb-10">
        <iframe
          title="Peaceful Spotify Playlist"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator"
          width="100%"
          height="500"
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
