import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { FeedPage } from '../pages/FeedPage';
import { useAuthStore } from '../store/useAuthStore';

export const AppRouter = () => {
    const { user } = useAuthStore();

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Navigate to="/feed" />: <LoginPage />}
                
            </Routes>
        </BrowserRouter>
    );
} ;