import React, {createContext, useContext, useEffect, useState} from "react";

type Theme = 'light' | 'dark';
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(
        (localStorage.getItem('theme') as Theme) || 'light'
    );
    
}