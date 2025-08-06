import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <h1 className="text-2xl">AI Website</h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/create">Create</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;