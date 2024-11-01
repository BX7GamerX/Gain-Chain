import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-charcoalGray p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-gold font-bold text-lg">Gain Chain</div>
        <div>
          <Link to="/home" className="text-ivoryWhite px-4 hover:underline">Home</Link>
          <Link to="/profile" className="text-ivoryWhite px-4 hover:underline">Profile</Link>
          <Link to="/login" className="text-ivoryWhite px-4 hover:underline">Login</Link>
          <Link to="/register" className="text-ivoryWhite px-4 hover:underline">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
