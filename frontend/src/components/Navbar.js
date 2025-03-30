import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-black text-neon-yellow text-sm py-3 px-6 flex justify-center gap-6 sticky top-0 z-50">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/journal" className="hover:underline">Journal</Link>
    <Link to="/youtube" className="hover:underline">YouTube</Link>
    <Link to="/spotify" className="hover:underline">Spotify</Link>
    <Link to="/articles" className="hover:underline">Articles</Link>
    <Link to="/quotes" className="hover:underline">Quotes</Link>
    <Link to="/wallpapers" className="hover:underline">Wallpapers</Link>
    <Link to="/login" className="hover:underline">Login</Link>
  </nav>
);

export default Navbar;
