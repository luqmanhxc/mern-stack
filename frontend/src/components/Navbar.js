import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>WorkoutBuddy</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span className="email">{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    <div>
                        {!user && (
                            <>
                                <Link to="/login">Log in</Link>
                                <Link to="/signup">Sign up</Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
