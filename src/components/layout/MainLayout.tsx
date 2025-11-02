import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const MainLayout = () => {
    <>
        <Header />
        <main style = {{ padding: '1rem'}}> <Outlet /> </main>
    </>
};