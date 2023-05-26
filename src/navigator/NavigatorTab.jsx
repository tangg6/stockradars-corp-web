import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavigatorTab = () => {
  return (
    <nav className="navbar bg-black text-white fixed top-0 left-0 w-full p-4 ">
      <div className="flex justify-end">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register?ref=stockradars&email=example@siamsquared.com">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigatorTab;
