import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Footer from './components/Footer';
import BreathingBar from './components/BreathingBar';
import NewspaperBackground from './components/NewspaperBackground';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Journal from './pages/Journal';
import YoutubePage from './pages/YoutubePage';
import SpotifyPage from './pages/SpotifyPage';
import Articles from './pages/Articles';
import Quotes from './pages/Quotes';
import Wallpapers from './pages/Wallpapers';
import JournalHistory from './pages/JournalHistory';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1a] text-white font-sans relative overflow-hidden">
        {/* 🔥 Healing newspaper background */}
        <NewspaperBackground />

        {/* 💨 Top component */}
        <BreathingBar />

        <div className="pt-0 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/youtube" element={<YoutubePage />} />
            <Route path="/spotify" element={<SpotifyPage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/wallpapers" element={<Wallpapers />} />
            <Route path="/history" element={<JournalHistory />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
