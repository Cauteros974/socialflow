import { Link } from "react-router-dom";
import { useThemeStore } from "../../store/useThemeStore";
import { useAuthStore } from "../../store/useAuthStore";

export const Sidebar = () => {
    const { theme, toggleTheme } = useThemeStore();
    const { logout } = useAuthStore();

    return(
        <aside className="w-64 h-screen p-4 border-r bg-gray-50 dark:bg-gray-900">
            <nav className="flex flex-col gap-3">
                <Link to="/">🏠 HomPage</Link>
                <Link to="/create-post">📝 New Post</Link>
                <button onClick={toggleTheme}>
                    🌗 Switch Theme ({theme})
                </button>
                <button onClick={logout} className="text-red-500 mt-4">
                    🚪 LogOut
                </button>
            </nav>
        </aside>
    );
};