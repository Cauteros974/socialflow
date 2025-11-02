import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rss, Sun, Moon, Home, PlusSquare, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useThemeStore } from '../../store/useThemeStore';
import { authService } from '../../services/authService';
import { toast } from 'react-hot-toast';

export const Header = () => {
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);
  const { theme, toggleTheme } = useThemeStore();
  const nav = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logoutUser();
      setUser(null);
      toast.success('You`re LogOut');
      nav('/login');
    } catch {
      toast.error('LogOut Error');
    }
  };

  return (
    <header style={{ borderBottom:'1px solid var(--border-primary)', padding:'8px 12px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <Link to="/" style={{ display:'flex', gap:8, alignItems:'center', fontWeight:700 }}>
        <Rss /> SocialFlow
      </Link>
      <div style={{ display:'flex', gap:10, alignItems:'center' }}>
        <button onClick={toggleTheme} aria-label="toggle theme">{theme==='dark' ? <Sun /> : <Moon />}</button>
        {user ? (
          <>
            <Link to="/"><Home /></Link>
            <Link to="/create-post"><PlusSquare /></Link>
            <Link to={`/profile/${user.uid}`}><img src={user.photoUrl} alt={user.displayName} style={{ width:32, height:32, borderRadius:16, objectFit:'cover' }} /></Link>
            <button onClick={handleLogout}><LogOut /></button>
          </>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </div>
    </header>
  );
};