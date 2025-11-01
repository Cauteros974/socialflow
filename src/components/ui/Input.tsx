import React, { forwardRef } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { error?: boolean; }
export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, className='', ...props }, ref) => {
  const errorC = error ? 'border-red-500' : '';
  return <input ref={ref} className={`border p-2 rounded ${errorC} ${className}`} {...props} />;
});