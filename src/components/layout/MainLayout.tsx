import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';

export const MainLayout = () => {
    const { user, logout } = useAuthStore();

    return(
        <div className="app-layout">
            {/* NAvigation */}
            <header className="app-header">
            <nav className="nav-container">
                <Link to="/" className="logo">SocialFlow</Link>
                <div className="nav-links">
                    (user ?(
                        <>
                            <Link to={`/profile/${user.uid}`}>Profile</Link>
                        </>
                    ))
                </div>
            </nav>
            </header>
        </div>
    )
}