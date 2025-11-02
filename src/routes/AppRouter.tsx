import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ProfilePage } from '../pages/ProfilePage';
import { CreatePost } from '../pages/CreatePost';
import { PostDetailPage } from '../pages/PostDetailPage';
import { LoginPage } from '../pages/LoginPage';
import { Register } from '../pages/Register';
import { MainLayout } from '../components/layout/MainLayout';
import { useAuthStore } from '../store/useAuthStore';

export const AppRouter = () => {
    const { user } = useAuthStore();

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id" element={<PostDetailPage />} />
                    <Route path="/profile/:uid" element={<ProfilePage />} />
                    <Route
                        path='/create-post'
                        element={user ? <CreatePost /> : <Navigate to="/login" />}
                    />
                </Route>

                <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/login" />} />
                <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};