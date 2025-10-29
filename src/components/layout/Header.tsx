import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export const Header = () => {
    const { user } = useAuthStore();

    return(
        <div className="flex justify-between items-center p-4 shadow-sm border-b">
            <Link to="/" className="text-xl fond-bold">SocialFlow</Link>
            <div className="flex items-center gap-3">
                {user && (
                    <>
                        <Link to={`/profile/${user.uid}`} className="flex items-center gap-2">
                        <img
                        src={user.photoUrl}
                        alt={user.displayName}
                        className="w-8 h-8 rounded-full object-cover"
                        />
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};