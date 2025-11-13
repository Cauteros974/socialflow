import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';

export const MainLayout = () => {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-layout">
      {/* Navigation */}
      <header className="app-header">
        <nav className="nav-container">
          <Link to="/" className="logo">
            SocialFlow
          </Link>

          <div className="nav-right">
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <div className="nav-links">
              {user ? (
                <>
                  <Link to={`/profile/${user.uid}`}>👤 Profile</Link>
                  <Link to="/create-post">📝 New Post</Link>
                  <button onClick={logout} className="logout-btn">
                    🚪 LogOut
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">LogIn</Link>
                  <Link to="/register">Registration</Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};