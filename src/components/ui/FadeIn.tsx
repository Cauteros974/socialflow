import React from "react";
import './FadeIn.css';

export const FadeIn: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    <div className="fade-in">{children}</div>
};