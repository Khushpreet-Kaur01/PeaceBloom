import React, { useState, useEffect } from 'react';
import NewspaperBackground from '../components/NewspaperBackground';

const YoutubePage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=8&playlistId=PLVhArO1OfdedEPIqS5RFGCD1Y_pmTcwSZ&key=AIzaSyDm_AHSunv_v8rGE7-raabnYYo_U1jgQXM`
      );
      const data = await response.json();
      setVideos(data.items);
      setLoading(false);
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-gradient-to-b from-white to-gray-200 text-black relative overflow-hidden">
      {/* Newspaper Background */}
      <NewspaperBackground textColor="black" />

      <h1 className="text-4xl font-bold text-center text-black mb-6 animate-fade-in">
        🎥 Peaceful YouTube Playlist
      </h1>
      <p className="text-gray-700 mb-10 text-center">
        Relax with calming videos curated for peace, reflection, and healing.
      </p>

      {/* Video Player */}
      {selectedVideo && (
        <div className="mb-8 animate-fade-in">
          <div className="w-full max-w-4xl mx-auto mb-4 transition-all duration-500 ease-in-out transform hover:scale-105">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Now Playing"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      )}

      {/* Video Thumbnails Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {loading ? (
          <div className="text-center text-gray-500">Loading videos...</div>
        ) : (
          videos.map((video) => (
            <div
              key={video.snippet.resourceId.videoId}
              className="relative bg-black p-4 rounded-xl cursor-pointer hover:scale-105 transform transition-all duration-500 border border-white shadow-lg"
              onClick={() => handleVideoClick(video.snippet.resourceId.videoId)}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-64 object-cover rounded-lg mb-2 transition-all duration-300"
              />
              <div className="text-sm text-center text-white font-medium">
                {video.snippet.title}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default YoutubePage;
