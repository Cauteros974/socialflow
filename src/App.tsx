import React, { useEffect } from 'react';
import { AppRouter } from './routes/AppRouter';
import { useAuthStore } from './store/useAuthStore';
import { useThemeStore } from './store/useThemeStore';
import { authService } from './services/authService';
import { Loader2 } from 'lucide-react';

function App() {
  // 1. Getting state and actions from stores
  const { setUser, isLoading, setLoading } = useAuthStore();
  const theme = useThemeStore((s) => s.theme);

  // 2. Effect for session check on startup
  useEffect(() => {
    // Simulate session checking (in localStorage)
    const checkUserSession = () => {
      try {
        const appUser = authService.getAppUserFromStorage();
        setUser(appUser ?? null);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUserSession();
  }, [setUser, setLoading]);

  // 3. Effect for changing the theme
  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
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
