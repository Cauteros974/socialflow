import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title?: string; children?: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
      const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', esc);
      return () => window.removeEventListener('keydown', esc);
}, [onClose]);

    return (
        <AnimatePresence>
      {isOpen && (
        <>
          <motion.div onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)' }}/>
          <motion.div initial={{ y:50, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:50, opacity:0 }} style={{ position:'fixed', left:'50%', top:'50%', transform:'translate(-50%,-50%)', background:'#fff', borderRadius:12, padding:16, zIndex:100 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <h3 style={{ margin:0 }}>{title}</h3>
              <button onClick={onClose} aria-label="Close"><X /></button>
            </div>
            <div style={{ marginTop:12 }}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    );
};