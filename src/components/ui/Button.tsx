import React from "react";
import { motion } from 'framer-motion';
import { Loader2 } from "lucide-react";

type MotionButtonProps = React.ComponentPropsWithoutRef<typeof motion.button>;

interface ButtonProps extends MotionButtonProps { isLoading?: boolean; variant?: 'primary'|'secondary'|'danger'|'ghost'; }
export const Button: React.FC<ButtonProps> = ({ children, isLoading = false, variant='primary', className='', ...props }) => {
    <div className="transition-all duration-300 hover:scale-[1.02] active:scale-95" />
    const base = 'inline-flex items-center gap-2 px-4 py-2 rounded';
    return(
        <motion.button whileTap={!isLoading ? { scale: 0.97 } : {}} disabled={isLoading} className={`${base} ${className}`} {...props}>
            {isLoading ? <><Loader2 className="animate-spin" size={16} /> <span>Loading...</span></> : children}
        </motion.button>
            
    );
};