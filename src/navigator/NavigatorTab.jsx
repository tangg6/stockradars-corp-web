import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => {
  return (
    <nav className="navbar bg-gray-800 text-white flex justify-between items-center">
      {/* Header content */}
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register?ref=stockradars&email=example@siamsquared.com">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
