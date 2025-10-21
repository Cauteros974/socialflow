import React, { useEffect } from 'react';
import { getAppUser } from './services/authService';
import { useAuthStore } from './store/useAuthStore';
import { Toaster } from 'react-hot-toast';
import { AppRouter } from './routes/AppRouter';

function App() {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    try {
      const appUser = getAppUser();
      if (appUser) {
        setUser(appUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Session restore error:", error);
      setUser(null);
    }
    
    setLoading(false);
    
  }, [setUser, setLoading]);

  return (
    <>
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 3000,
        }}
      />
      <AppRouter />
    </>
  );
}

export default App;