import { Link } from "react-router-dom";

function Navbar({ page, onLogout }) {
    return (
        <nav className="navbar">
        <div className="navbar-content">
            <h1 className="logo">threadly</h1>

            <div className="nav-links">
            <Link to="/home" className={page === "home" ? "active" : ""}>
                Home
            </Link>

            <Link to="/fetch" className={page === "fetch" ? "active" : ""}>
                Fetch
            </Link>

            <Link to="/profile" className={page === "profile" ? "active" : ""}>
                Profile
            </Link>

            <Link to="/login" onClick={onLogout}>
                Logout
            </Link>

            </div>
        </div>
        </nav>
    );
}

export default Navbar;