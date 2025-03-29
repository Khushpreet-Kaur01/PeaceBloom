import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Journal from './pages/Journal';
import YoutubePage from './pages/YoutubePage';
import SpotifyPage from './pages/SpotifyPage';
import Articles from './pages/Articles';
import Quotes from './pages/Quotes';
import Wallpapers from './pages/Wallpapers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">
        <Navbar />

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/youtube" element={<YoutubePage />} />
            <Route path="/spotify" element={<SpotifyPage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/wallpapers" element={<Wallpapers />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
