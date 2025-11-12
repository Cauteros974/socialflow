import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Home, PlusSquare, User } from 'lucide-react';
import { Button } from '../ui/Button';
import '../index.css';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-gray-900 tracking-tight">
          SocialFlow
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-gray-600">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Home size={20} />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            to="/create"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <PlusSquare size={20} />
            <span className="hidden sm:inline">New Post</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <User size={20} />
            <span className="hidden sm:inline">Profile</span>
          </Link>
        </nav>

        {/* Logout */}
        <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm">
          <LogOut size={16} className="mr-1" /> Log out
        </Button>
      </div>
    </header>
  );
};