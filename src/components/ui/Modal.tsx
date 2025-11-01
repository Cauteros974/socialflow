import React, { Children, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title?: string; children?: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
    useEffect(() = {
        const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', esc);
        return () => window.removeEventListener('keydown', esc);
    })
}