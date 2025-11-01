import React from "react";
import { motion } from 'framer-motion';
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { isLoading?: boolean; variant?: 'primary'|'secondary'|'danger'|'ghost'; }
export const Button: React.FC<ButtonProps> = ({ children, isLoading = false, variant='primary', className='', ...props }) => {
    const base = 'inline-flex items-center gap-2 px-4 py-2 rounded';
}