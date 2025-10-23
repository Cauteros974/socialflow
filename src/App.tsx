import React, { useEffect } from 'react';
import { useAuthStore } from './store/useAuthStore';
import { useThemeStore } from './store/useThemeStore';
import { authService } from './services/authService';
import { AppRouter } from './routes/AppRouter';
import { Loader2 } from 'lucide-react';


function App() {
  // 1. Getting state and actions from stores
  const { setUser, isLoading, setLoading } = useAuthStore();
  const theme = useThemeStore((state) => state.theme);

  // 2. Effect for session check on startup
  useEffect(() => {
    // Simulate session checking (in localStorage)
    const checkUserSession = () => {
      try {
        const appUser = authService.getAppUserFromStorage();
        if (appUser) {
          setUser(appUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Session restore error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUserSession();
  }, [setUser, setLoading]);

  // 3. Effect for changing the theme
  useEffect(() => {
    const body = document.body;
    if (theme === 'light') {
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
    }
    localStorage.setItem('socialflow-theme', theme);
  }, [theme]);
  
  // 4. While the session is being checked, show the global loader
  if (isLoading) {
    return (
      <div className="global-loader">
        <Loader2 className="animate-spin" size={32} />
        <p>Loading SocialFlow...</p>
      </div>
    );
  }

  return <AppRouter />;
}

export default App;