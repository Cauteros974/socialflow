import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';
import { Link2Icon } from 'lucide-react';

export const MainLayout = () => {
    const { user, logout } = useAuthStore();

    return(
        <div className="app-layout">
            {/* Navigation */}
            <header className="app-header">
            <nav className="nav-container">
                <Link to="/" className="logo">SocialFlow</Link>
                <div className="nav-links">
                    {user ?(
                        <>
                            <Link to={`/profile/${user.uid}`}> 👤 Profile</Link>
                            <Link to="/create-post">📝 New Post</Link>
                            <Link onClick={logout}>🚪 LogOut</Link>
                        </>
                    ):(
                        <>
                            <Link to="/login">LogIn</Link>
                            <Link to="/register">Registration</Link>
                        </>
                    )}
                </div>
            </nav>
            </header>
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};