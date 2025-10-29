import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from 'lucide-react';

export const MainLayout = () => {
    return(
        <div className="app-layout flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};