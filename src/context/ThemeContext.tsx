import React, {createContext, useContext, useEffect, useState} from "react";

type Theme = 'light' | 'dark';
interface ThemeContext {
    theme: Theme;
    toggleTheme: () => void;
}